import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR<{ id: number; title: string }[]>(
    "/api/v1/posts",
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};

export const useGetPostById = (id?: string | string[]) => {
  const { data, error, ...rest } = useSWR<{
    id: number;
    title: string;
    body: string;
  }>(typeof id === "string" ? `/api/v1/posts/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
