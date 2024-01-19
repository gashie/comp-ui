import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import img from "../../../../Common/CommonBrand/brand.png";

const Footer = () => {
  const circleButtonStyle = {
    borderRadius: "50%",
    width: "50px", // Adjust the width and height as needed
    height: "50px",
  };

  return (
    <footer className="footer p-5" style={{ backgroundColor: "#eceaeb" }}>
      <>
        <Row className="mb-4 d-flex justify-content-center ">
          {/* <div className="mb-3 mb-lg-0 text-center p-2">
            <img src={img} className="img-fluid" width="60" alt="Logo" />
          </div> */}
          <Col md={2} lg={1} className="mb-3 mb-lg-0">
            <div className="d-flex g-2">
              <div className="mt-2">
                <h5 className="fw-bolder">
                  <img src={img} className="img-fluid" width="20" alt="Logo" />
                  BE360
                </h5>
                <p>Email: info@example.com</p>
                <p>Phone: (233) 000-0000</p>
              </div>
            </div>
          </Col>
          <Col md={2} lg={1} className="mb-3 mb-lg-0">
            <h5 className="fw-bolder">Monitoring</h5>
            <p>
              <a
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="/services"
                style={{ textDecoration: "none", color: "black" }}
              >
                Approach
              </a>
            </p>
            <p>
              <a
                href="/portfolio"
                style={{ textDecoration: "none", color: "black" }}
              >
                Portfolio
              </a>
            </p>
          </Col>
          <Col md={2} lg={1} className="mb-3 mb-lg-0">
            <h5 className="fw-bolder">Application Deployments</h5>
            <p>
              <a
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="/services"
                style={{ textDecoration: "none", color: "black" }}
              >
                Approach
              </a>
            </p>
            <p>
              <a
                href="/portfolio"
                style={{ textDecoration: "none", color: "black" }}
              >
                Portfolio
              </a>
            </p>
          </Col>
          <Col md={2} lg={1} className="mb-3 mb-lg-0">
            <h5 className="fw-bolder">Database Management</h5>
            <p>
              <a
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="/services"
                style={{ textDecoration: "none", color: "black" }}
              >
                Approach
              </a>
            </p>
            <p>
              <a
                href="/portfolio"
                style={{ textDecoration: "none", color: "black" }}
              >
                Portfolio
              </a>
            </p>
          </Col>
          <Col md={2} lg={1} className="mb-3 mb-lg-0">
            <h5 className="fw-bolder">Configurations</h5>
            <p>
              <a
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="/services"
                style={{ textDecoration: "none", color: "black" }}
              >
                Approach
              </a>
            </p>
            <p>
              <a
                href="/portfolio"
                style={{ textDecoration: "none", color: "black" }}
              >
                Portfolio
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mt-5">
            <p>© {new Date().getFullYear()} BE360. All rights reserved.</p>
          </Col>
        </Row>
      </>
    </footer>
  );
};

export default Footer;
