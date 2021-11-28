import type { NextPage } from "next";
import { BaseLayout } from "../components/layouts/BaseLayout";
import { BasePage } from "../components/BasePage";

const Cv: NextPage = () => (
  <BaseLayout>
    <BasePage>
      <h1>I am cv page</h1>
    </BasePage>
  </BaseLayout>
);

export default Cv;
