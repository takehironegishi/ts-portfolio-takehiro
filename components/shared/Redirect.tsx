import { useEffect } from "react";

interface Props {
  to: string;
}

export const Redirect: React.FC<Props> = ({ to }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.assign(to);
    }
  }, [to]);

  return null;
};
