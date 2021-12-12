import type { NextPage } from "next";
import Link from "next/link";
import { useGetPosts } from "actions";
import { useGetUser } from "actions/user";
import { BaseLayout } from "components/layouts/BaseLayout";
import { BasePage } from "components/BasePage";

interface Props {
  posts: { id: number; title: string }[];
}

const Portfolios: NextPage<Props> = () => {
  const { data, loading, error } = useGetPosts();
  const { data: user, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={user} loading={loadingUser}>
      <BasePage>
        <h1>I am portfolios page</h1>
        {loading && <p>Loading data...</p>}
        {data && (
          <ul>
            {data.map((post) => (
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
