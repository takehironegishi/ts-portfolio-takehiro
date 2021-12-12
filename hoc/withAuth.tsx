import { NextPage } from "next";

export const withAuth = (Component: NextPage) => {
  return function Auth(props: any) {
    return <Component {...props} />;
  };
};
