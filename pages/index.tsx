import type { NextPage } from "next";
import { Container, Button } from "reactstrap";
import { BaseLayout } from "../components/layouts/BaseLayout";

const Home: NextPage = () => (
  <BaseLayout>
    <Container>
      <Button color="danger">Danger</Button>
    </Container>
    <h1>I am index page</h1>
  </BaseLayout>
);

export default Home;
