import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const OurStory = () => {
  return (
    <Container className="mt-4">
      
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About us</Breadcrumb.Item>
      </Breadcrumb>

      {/* Heading */}
      <h1 className="text-center mb-5 fw-bold">About us</h1>

      {/* Responsive Grid */}
      <Row className="g-4">
        
        {/* Our Company */}
        <Col xs={12} md={4}>
          <div className="p-3  h-100">
            <h2 className="fw-bold">Our company</h2>
            <p className="fw-semibold text-muted">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.
            </p>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
            </p>
            <ul>
              <li>Top quality products</li>
              <li>Best customer service</li>
              <li>30-days money back guarantee</li>
            </ul>
          </div>
        </Col>

        {/* Our Team */}
        <Col xs={12} md={4}>
          <div className="p-3  h-100">
            <h2 className="fw-bold">Our team</h2>
            <p className="fw-semibold text-muted">
              Lorem set sint occaecat cupidatat non
            </p>
            <p>
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </Col>

        {/* Testimonials */}
        <Col xs={12} md={4}>
          <div className="p-3  h-100">
            <h2 className="fw-bold">Testimonials</h2>

            <blockquote className="fst-italic">
             “Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.”
              <footer className="fw-semibold mt-2">Lorem ipsum dolor sit</footer>
            </blockquote>

            <blockquote className="fst-italic mt-3">
              “Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”
              <footer className="fw-semibold mt-2">Ipsum dolor sit</footer>
            </blockquote>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default OurStory;
