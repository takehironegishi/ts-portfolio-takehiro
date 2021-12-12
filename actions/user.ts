import useSWR from "swr";
import { fetcher } from "actions";
import { User } from "types";

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR<User>("/api/v1/me", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
