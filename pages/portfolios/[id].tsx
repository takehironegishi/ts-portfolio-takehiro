import type { NextPage, GetServerSideProps } from "next";
import axios from "axios";
import { BaseLayout } from "../../components/layouts/BaseLayout";
import { BasePage } from "../../components/BasePage";

interface Props {
  portfolio: { id: number; title: string; body: string };
}

const Portfolio: NextPage<Props> = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  let post = {};

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    post = res.data;
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
  }

  return {
    props: {
      portfolio: post,
    },
  };
};

export default Portfolio;
