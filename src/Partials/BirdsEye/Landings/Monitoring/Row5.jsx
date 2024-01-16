import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row5() {
  return (
    <>
      <div>
        <section
          style={{ height: "100svh", backgroundColor: "white" }}
          className="custom-container bg-img "
        >
          <div className="container ">
            <Row>
              <Col>
                <div>
                  {" "}
                  <h1
                    className="fw-bolder "
                    style={{ fontSize: "3rem", wordSpacing: "0.4rem", color: "" }}
                  >
                    Website Uptime And Performance Monitoring
                  </h1>
                  <p className="mt-5 text-muted">
                  We’re on a mission to bring matching gifts to donors wherever they give. Explore our network of partnerships and integrations to learn how we support nonprofits wherever their donors are.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="mt-5">
                  <img
                    src={"https://doublethedonation.com/wp-content/uploads/2023/06/logo-cloud-version2.png"}
                    className="img-fluid"
                  
                    alt="Your Image Alt Text"
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* svg */}
        </section>
      </div>
    </>
  );
}

export default Row5;
