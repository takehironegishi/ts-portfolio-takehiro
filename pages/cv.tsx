import type { NextPage } from "next";
import { useGetUser } from "actions/user";
import { BaseLayout } from "components/layouts/BaseLayout";
import { BasePage } from "components/BasePage";

const Cv: NextPage = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am cv page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
