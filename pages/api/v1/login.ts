const login = (req: any, res: any) => {
  res.status(200).json({ message: "Hello from login route!" });
};

export default login;
