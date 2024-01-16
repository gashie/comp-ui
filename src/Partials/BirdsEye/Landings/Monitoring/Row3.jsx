import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row3() {
  return (
    <>
      <div>
        <section
          style={{ height: "auto", backgroundColor: "#262626" }}
          className="custom-container bg-img text-light"
        >
          <div className="mt-4">
            <p className="fw-light text-muted fs-3">Project</p>
          </div>
          <div className="">
            <h1 className="fw-bolder">
              {" "}
              Complete website monitoring service with these tools
            </h1>
          </div>

          <div className="mt-4">
            <p className="fw-light text-muted fs-5">
              Our all-in-one monitoring platform will watch and protect your
              website
            </p>
          </div>

          <div className="d-flex p-5 justify-content-center align-items-center">
            <div className="text-center w-50">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                ></img>
              </div>
              <h5 className="text-center mt-5">Uptime Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Monitor the uptime and response time of HTTP, HTTPS, DNS, UDP,
                  TCP, email, and more. Our tool combines keyword monitoring and
                  website availability monitoring, performed as often as every
                  30 seconds from 171 locations worldwide.
                </p>
              </div>
            </div>
            <div className="text-center w-50">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                ></img>
              </div>
              <h5 className="text-center mt-5">Transaction Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Utilize synthetic monitoring for login forms, sign-up forms,
                  check-out processes, etc. Our multiple-step transaction
                  monitoring tool alerts you if specific features of your web
                  application break.
                </p>
              </div>
            </div>
            <div className="text-center w-50">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                ></img>
              </div>
              <h5 className="text-center mt-5">Real User Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Keep tabs on the speed of user experience for your website
                  visitors. Receive detailed reports on loading speeds
                  categorized by country, browser, OS, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex p-5 justify-content-center align-items-center">
            <div className="text-center w-50">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                ></img>
              </div>
              <h5 className="text-center mt-5">Page Speed Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Know if your site is loading fast enough with our speed
                  monitoring tool. We use a real Google Chrome browser to fully
                  load your website and send notifications if website
                  performance lags.
                </p>
              </div>
            </div>
            <div className="text-center w-50">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                ></img>
              </div>
              <h5 className="text-center mt-5">SSL Certificate Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Monitor the health of your SSL certificates, ensuring you
                  never miss an SSL certificate renewal. Be the first to know
                  about any technical problems. Monitoring from multiple
                  locations.
                </p>
              </div>
            </div>
            <div className="text-center w-50">
              <div>
                <img
                  src="https://static.uptimia.com/img/icon-product-rum.svg"
                  className="img-fluid"
                  width="100"
                ></img>
              </div>
              <h5 className="text-center mt-5">Domain Expiry Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Monitor domain name expirations and receive alerts via email,
                  SMS, Slack, or other preferred tools when they are about to
                  expire.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Row3;
