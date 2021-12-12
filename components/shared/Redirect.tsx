import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  to: string;
  ssr?: boolean;
}

export const Redirect: React.FC<Props> = ({ to, ssr }) => {
  const router = useRouter();

  useEffect(() => {
    if (ssr) {
      window.location.pathname = to;
    } else {
      router.push(to);
    }
  }, [router, ssr, to]);

  return null;
};
