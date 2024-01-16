import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row2() {
  return (
    <>
      <div >
        <section style={{ backgroundColor:"white", paddingTop: "10rem", height: 'auto', paddingBottom: '10rem' }} className="mt-5">
          <div className="">
            <h1 className="fw-bolder text-center">
              How does website monitoring work?
            </h1>
          </div>
          <div className="mt-4">
            <p className="fw-light text-muted fs-5 text-center">
              It only takes a few minutes to get started.
            </p>
          </div>

          <Row className="d-flex p-5 justify-content-center align-items-center g-3">
            <Col xs={12} md={6} lg={4} className="text-center">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Sign Up Icon"
                />
              </div>
              <h5 className="text-center mt-5">Sign Up</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Sign up with just your name, e-mail, and password. No more
                  information required.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Start Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-5">Start Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Enter your site URL to monitor your website uptime and
                  availability, as well as page speed, SSL, and much more.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Get notified Icon"
                />
              </div>
              <h5 className="text-center mt-5">Get notified</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Uptimia will immediately alert you via email, SMS, Slack, or
                  other integrations in case of a problem.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
}

export default Row2;
