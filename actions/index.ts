import { useEffect, useState } from "react";

export const useGetData = <T>(url: string | null) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<{ message: string } | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      const res = await fetch(url);
      const result = await res.json();

      if (res.status !== 200) {
        setError(result);
      } else {
        setData(result);
      }

      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
