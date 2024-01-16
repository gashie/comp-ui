import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row2() {
  return (
    <>
      <div>
        <section
          style={{ height: "87vh", backgroundColor: "white" }}
          className="custom-container"
        >
          <div className="">
            <h1 className="fw-bolder">How does website monitoring work?</h1>
          </div>
          <div className="mt-4">
            <p className="fw-light text-muted fs-3">
              It only takes a few minutes to get started.
            </p>
          </div>

          <div className="d-flex p-5 justify-content-center align-items-center">
            <div className="text-center w-50">
              <div>
                <img src="https://static.uptimia.com/img/icon-product-rum.svg"className="img-fluid" width='100'></img>
              </div>
              <h5 className="text-center mt-5">Sign Up</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                  Sign up with just your name, e-mail and password. No more
                  information required.
                </p>
              </div>
            </div>
            <div className="text-center w-50">
              <div>
                <img src="https://static.uptimia.com/img/icon-product-rum.svg" className="img-fluid" width='100'></img>
              </div>
              <h5 className="text-center mt-5">Start Monitoring</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                Enter your site URL to monitor your website uptime and availability, as well page speed, SSL and much more.
                </p>
              </div>
            </div>
            <div className="text-center w-50">
              <div>
                <img src="https://static.uptimia.com/img/icon-product-rum.svg"className="img-fluid" width='100'></img>
              </div>
              <h5 className="text-center mt-5">Get notified</h5>
              <div className="d-flex justify-content-center">
                <p className="text-center w-50 text-muted fw-lighter">
                Uptimia will immediately alert you via email, SMS, Slack, or other integrations in case of a problem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Row2;
