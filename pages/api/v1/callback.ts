import auth0 from "utils/auth0";

const callback = async (req: any, res: any) => {
  try {
    await auth0.handleCallback(req, res, { redirectTo: "/" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }
};

export default callback;
