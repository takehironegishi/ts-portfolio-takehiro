import type { NextPage } from "next";
import axios from "axios";
import { BaseLayout } from "../components/layouts/BaseLayout";

interface Props {
  posts: { id: number; title: string }[];
}

const Portfolios: NextPage<Props> = ({ posts }) => {
  return (
    <BaseLayout>
      <h1>I am portfolios page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
