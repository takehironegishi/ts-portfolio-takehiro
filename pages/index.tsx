import type { NextPage } from "next";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import { BaseLayout } from "../components/layouts/BaseLayout";

const Home: NextPage = () => (
  <BaseLayout className="cover">
    <div className="main-section">
      <div className="background-image">
        <Image src="/images/background-index.png" alt="" layout="fill" />
      </div>
      <Container>
        <Row>
          <Col md="6">
            <div className="hero-section">
              <div className={`flipper`}>
                <div className="back">
                  <div className="hero-section-content">
                    <h2> Full Stack Web Developer </h2>
                    <div className="hero-section-content-intro">
                      Have a look at my portfolio and job history.
                    </div>
                  </div>
                  <Image
                    className="image"
                    src="/images/section-1.png"
                    alt=""
                    layout="responsive"
                    width={80}
                    height={100}
                  />
                  <div className="shadow-custom">
                    <div className="shadow-inner"> </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="hero-welcome-wrapper">
            <div className="hero-welcome-text">
              <h1>
                Welcome to the portfolio website of Filip Jerga. Get informed,
                collaborate and discover projects I was working on through the
                years!
              </h1>
            </div>
            <div className="hero-welcome-bio">
              <h1>Let's take a look on my work.</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BaseLayout>
);

export default Home;
