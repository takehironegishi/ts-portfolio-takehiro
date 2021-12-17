import type { NextPage } from "next";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";
import { withAuth } from "hoc/withAuth";
import { User } from "types";

interface Props {
  user: User;
  loading: boolean;
}

const OnlyAdmin: NextPage<Props> = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am Admin Page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth<Props>(OnlyAdmin)("admin");
