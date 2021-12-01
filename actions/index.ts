import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);
  const [error, setError] = useState<{ message: string } | undefined>();

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/api/v1/posts");
      const result = await res.json();

      if (res.status !== 200) {
        setError(result);
      } else {
        setPosts(result);
      }
    };
    getPosts();
  }, []);

  return { posts, error };
};
