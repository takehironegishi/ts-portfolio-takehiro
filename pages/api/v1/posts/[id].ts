import axios from "axios";

const handlePosts = async (req: any, res: any) => {
  try {
    const axiosRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    const post = axiosRes.data;
    res.status(200).json(post);
  } catch (e: any) {
    if (e instanceof Error) {
      console.error(e.message);
      res.status(400).json({ message: "Api error" });
    }
  }
};

export default handlePosts;
