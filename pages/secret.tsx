import type { NextPage } from "next";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";
import { withAuth } from "hoc/withAuth";
import { User } from "types";

interface Props {
  user: User;
  loading: boolean;
}

const Secret: NextPage<Props> = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am Secret Page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth<Props>(Secret);
