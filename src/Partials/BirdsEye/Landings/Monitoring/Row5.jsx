import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row5() {
  return (
    <>
      <div>
        <section
          style={{ height: "auto", backgroundColor: "white", paddingTop: "2rem" }}
          className="custom-container bg-img"
        >
          <div className="container">
            <Row className="align-items-center">
              <Col md={6}>
                <div>
                  <h1
                    className="fw-bolder "
                    style={{ fontSize: "2.5rem", wordSpacing: "0.4rem", color: "" }}
                  >
                    Website Uptime And Performance Monitoring
                  </h1>
                  <p className="mt-4 text-muted">
                    We’re on a mission to bring matching gifts to donors wherever they give. Explore our network of partnerships and integrations to learn how we support nonprofits wherever their donors are.
                  </p>
                </div>
              </Col>
              <Col md={6} className="mt-4 mt-md-0">
                <div className="text-center">
                  <img
                    src={"https://doublethedonation.com/wp-content/uploads/2023/06/logo-cloud-version2.png"}
                    className="img-fluid"
                    alt="Your Image Alt Text"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
}

export default Row5;
