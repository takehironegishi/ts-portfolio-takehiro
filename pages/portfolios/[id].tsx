import type { NextPage } from "next";
import { useRouter } from "next/router";
import { BaseLayout } from "../../components/layouts/BaseLayout";

const Portfolio: NextPage = () => {
  const router = useRouter();
  return (
    <BaseLayout>
      <h1>I am Portfolio Page</h1>
      <h2>{router.query.id}</h2>
    </BaseLayout>
  );
};

export default Portfolio;
