import type { NextPage } from "next";
import Link from "next/link";
import { useGetPosts } from "actions";
import { BaseLayout } from "components/layouts/BaseLayout";
import { BasePage } from "components/BasePage";

interface Props {
  posts: { id: number; title: string }[];
}

const Portfolios: NextPage<Props> = () => {
  const { posts, error, loading } = useGetPosts();

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        {loading && <p>Loading data...</p>}
        {posts && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
