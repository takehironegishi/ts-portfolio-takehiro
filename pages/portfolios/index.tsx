import type { NextPage } from "next";
import Link from "next/link";
import axios from "axios";
import { BaseLayout } from "components/layouts/BaseLayout";
import { BasePage } from "components/BasePage";

interface Props {
  posts: { id: number; title: string }[];
}

const Portfolios: NextPage<Props> = ({ posts }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/portfolios/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
  }

  return {
    props: {
      posts: posts.slice(0, 10),
    },
  };
};

export default Portfolios;
