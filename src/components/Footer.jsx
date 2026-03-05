import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/" },
    { name: "Cart", path: "/cart" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  const services = [
    "Fast Delivery",
    "Secure Payment",
    "24/7 Support",
    "Easy Returns",
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          {/* About */}
          <Col md={3}>
            <h5 className="fw-bold">BuyNest</h5>
            <p className="text-secondary small">
              Your trusted online store for quality products.
              Shop the latest trends with secure payments
              and fast delivery.
            </p>
          </Col>

          {/* Navigation */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Navigation</h6>
            <ul className="list-unstyled">
              {navigation.map((item, i) => (
                <li key={i} className="mb-2">
                  <NavLink
                    to={item.path}
                    className="text-secondary text-decoration-none"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled text-secondary">
              {services.map((service, i) => (
                <li key={i} className="mb-2">
                  {service}
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="text-secondary small mb-2">
              Call us <br />
              <strong className="text-light">
                +91 62810 00001
              </strong>
            </p>
            <p className="text-secondary small">
              Email <br />
              <strong className="text-light">
                buynext@gmail.com
              </strong>
            </p>
          </Col>

          {/* Social */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Social</h6>
            <div className="d-flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="btn btn-outline-light btn-sm rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} BuyNest. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;