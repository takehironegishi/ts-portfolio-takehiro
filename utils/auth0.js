import { initAuth0 } from "@auth0/nextjs-auth0";

const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    storeAccessToken: true,
  },
});

export default auth0;

export const isAuthorized = (user, role) => {
  return (
    user &&
    // @ts-ignore
    user["https://portfolio-takehiro.com" + "/roles"].includes(role)
  );
};

export const authorizeUser = async (req) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "api/v1/login",
        permanent: false,
      },
    };
  }

  return session.user;
};

export const withAuth =
  (getData) =>
  (role) =>
  async ({ req }) => {
    const session = await auth0.getSession(req);
    if (
      !session ||
      !session.user ||
      (role && !isAuthorized(session.user, role))
    ) {
      return {
        redirect: {
          destination: "api/v1/login",
          permanent: false,
        },
      };
    }

    const data = getData ? await getData() : {};

    return { props: { user: session.user, ...data } };
  };
