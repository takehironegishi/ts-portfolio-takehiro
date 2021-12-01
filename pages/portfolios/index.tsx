import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BaseLayout } from "components/layouts/BaseLayout";
import { BasePage } from "components/BasePage";

interface Props {
  posts: { id: number; title: string }[];
}

const Portfolios: NextPage<Props> = () => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/api/v1/posts");
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);

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

export default Portfolios;
