import axios from "axios";

const handlePosts = async (_: any, res: any) => {
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = axiosRes.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      res.status(400).end("Api Error!");
    }
  }
};

export default handlePosts;
