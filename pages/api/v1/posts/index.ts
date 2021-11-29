import { data } from "data";

const handlePosts = (_: any, res: any) => {
  res.status(200).json(data);
};

export default handlePosts;
