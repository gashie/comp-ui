import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row3() {
  return (
    <>
      <div>
        <section
          style={{ backgroundColor: "#262626", paddingTop: "2rem", height: 'auto' }}
          className="custom-container bg-img text-light"
        >
          <div className="mt-4">
            <p className="fw-light text-muted fs-3 text-center">Project</p>
          </div>
          <div className="">
            <h1 className="fw-bolder text-center">
              Complete website monitoring service with these tools
            </h1>
          </div>

          <div className="mt-4">
            <p className="fw-light text-muted fs-5 text-center">
              Our all-in-one monitoring platform will watch and protect your
              website
            </p>
          </div>

          <Row className="d-flex p-3 p-md-5 justify-content-center align-items-center flex-wrap">
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Uptime Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-4">Uptime Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Monitor the uptime and response time of HTTP, HTTPS, DNS, UDP,
                  TCP, email, and more. Our tool combines keyword monitoring and
                  website availability monitoring, performed as often as every
                  30 seconds from 171 locations worldwide.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Transaction Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-4">Transaction Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Utilize synthetic monitoring for login forms, sign-up forms,
                  check-out processes, etc. Our multiple-step transaction
                  monitoring tool alerts you if specific features of your web
                  application break.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Real User Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-4">Real User Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Keep tabs on the speed of user experience for your website
                  visitors. Receive detailed reports on loading speeds
                  categorized by country, browser, OS, and more.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Page Speed Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-4">Page Speed Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Know if your site is loading fast enough with our speed
                  monitoring tool. We use a real Google Chrome browser to fully
                  load your website and send notifications if website
                  performance lags.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="SSL Certificate Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-4">SSL Certificate Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Monitor the health of your SSL certificates, ensuring you
                  never miss an SSL certificate renewal. Be the first to know
                  about any technical problems. Monitoring from multiple
                  locations.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                  alt="Domain Expiry Monitoring Icon"
                />
              </div>
              <h5 className="text-center mt-4">Domain Expiry Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-75 text-muted fw-lighter">
                  Monitor domain name expirations and receive alerts via email,
                  SMS, Slack, or other preferred tools when they are about to
                  expire.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
}

export default Row3;
