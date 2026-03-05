import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AboutVideo from "../assets/BuyNextAbout.mp4";
import AboutUs from "../assets/AboutUs.jpeg";

const About = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-light py-5 text-center">
        <Container>
          <h1 className="fw-bold">About BuyNest</h1>
          <p className="text-muted mt-3">
            Your one-stop destination for quality products at the best prices.
          </p>
        </Container>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="text-muted">
                BuyNest is an online shopping platform that offers a wide range
                of products including electronics, fashion, and accessories. Our
                mission is to provide high-quality products with a seamless
                shopping experience.
              </p>
              <p className="text-muted">
                We focus on customer satisfaction, fast delivery, and trusted
                services to make your shopping journey smooth and enjoyable.
              </p>
            </Col>

            <Col md={6}>
              <img
                src={AboutUs}
                alt="About us"
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Watch Our Story</h2>

          <Row className="justify-content-center">
            <Col md={8}>
              <div className="ratio ratio-16x9 shadow">
                <video
                  src={AboutVideo}
                  title="About Video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg"
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">Quality Products</h5>
                  <p className="text-muted">
                    Carefully selected items for the best customer experience.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">Fast Delivery</h5>
                  <p className="text-muted">
                    Quick and reliable shipping to your doorstep.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">Secure Payments</h5>
                  <p className="text-muted">
                    Safe and encrypted payment methods.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
