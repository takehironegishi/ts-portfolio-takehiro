import type { NextPage } from "next";
import { useGetUser } from "actions/user";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";

const About: NextPage = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am about page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
