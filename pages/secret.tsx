import type { NextPage } from "next";
import { useGetUser } from "actions/user";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";
import { Redirect } from "components/shared/Redirect";

const Secret: NextPage = () => {
  const { data, loading } = useGetUser();

  if (loading) return <p>Loading...</p>;

  if (!data) {
    return <Redirect to="/api/v1/login" />;
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am Secret page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
};

export default Secret;
