import { NextPage } from "next";
import { useGetUser } from "actions/user";
import { Redirect } from "components/shared/Redirect";

export const withAuth = <T extends object>(Component: NextPage<T>) => {
  return function Auth(props: any) {
    const { data, loading } = useGetUser();

    if (loading) return <p>Loading...</p>;

    if (!data) {
      return <Redirect ssr to="/api/v1/login" />;
    } else {
      return <Component user={data} loading={loading} {...props} />;
    }
  };
};
