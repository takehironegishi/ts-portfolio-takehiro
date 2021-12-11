import type { NextPage } from "next";
import { useRouter } from "next/router";
import { BaseLayout } from "components/layouts/BaseLayout";
import { BasePage } from "components/BasePage";
import { useGetData } from "actions";

interface Props {
  portfolio: { id: number; title: string; body: string };
}

const Portfolio: NextPage<Props> = () => {
  const router = useRouter();
  const {
    data: portfolio,
    error,
    loading,
  } = useGetData<{ title: string; body: string; id: number }>(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  );

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data...</p>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {portfolio && (
          <>
            <h1>I am Portfolio Page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
