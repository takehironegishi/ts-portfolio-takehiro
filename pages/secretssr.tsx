import type { GetServerSideProps, NextPage } from "next";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";
import { User } from "types";
import auth0 from "utils/auth0";

interface Props {
  user?: User;
}

const SecretSSR: NextPage<Props> = ({ user }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret Page - Hello {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "api/v1/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
};

export default SecretSSR;
