import { NextPage } from "next";
import { useGetUser } from "actions/user";
import { Redirect } from "components/shared/Redirect";
import { isAuthorized } from "utils/auth0";

export const withAuth =
  <T extends object>(Component: NextPage<T>) =>
  (role?: string) => {
    return function Auth(props: any) {
      const { data, loading } = useGetUser();

      if (loading) return <p>Loading...</p>;

      if (!data) {
        return <Redirect ssr to="/api/v1/login" />;
      } else {
        if (role && !isAuthorized(data, role)) {
          return <Redirect ssr to="/api/v1/login" />;
        }
        return <Component user={data} loading={loading} {...props} />;
      }
    };
  };
