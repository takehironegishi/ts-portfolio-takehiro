import type { GetServerSideProps, NextPage } from "next";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";
import { User } from "types";
import { withAuth } from "utils/auth0";

interface Props {
  user?: User;
  title?: string;
}

const OnlyAdminSSR: NextPage<Props> = ({ user, title }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret Page - Hello {user && user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
};

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: "My new title!" });
    }, 500);
  });
};

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  const title = await getTitle();

  return title;
})("admin");

export default OnlyAdminSSR;
