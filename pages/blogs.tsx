import type { NextPage } from "next";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";

const Blogs: NextPage = () => (
  <BaseLayout>
    <BasePage>
      <h1>I am blogs page</h1>
    </BasePage>
  </BaseLayout>
);

export default Blogs;
