import auth0 from "utils/auth0";

const logout = async (req: any, res: any) => {
  try {
    await auth0.handleLogout(req, res);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }
};

export default logout;
