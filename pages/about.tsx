import type { NextPage } from "next";
import { BasePage } from "../components/BasePage";
import { BaseLayout } from "../components/layouts/BaseLayout";

const About: NextPage = () => (
  <BaseLayout>
    <BasePage>
      <h1>I am about page</h1>
    </BasePage>
  </BaseLayout>
);

export default About;
