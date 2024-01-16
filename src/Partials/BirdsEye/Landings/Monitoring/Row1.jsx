import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";
import Navbar from "./Navbar";

function Row1() {
  return (
    <>
      <section
        style={{ backgroundColor: "white" }}
        className="custom-container bg-img"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div
          className="container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <Row className="align-items-center">
            <Col xs={12} xl={6}>
              <div data-aos="fade-up">
                <h1
                  className="fw-bolder"
                  style={{
                    fontSize: "5em",
                    wordSpacing: "2px",
                    color: "",
                  }}
                >
                  Website Uptime And Performance Monitoring
                </h1>
              </div>
            </Col>
            <Col xs={12} xl={6}>
              <div className="mt-3 mt-xl-0">
                <img
                  src={sc}
                  className="img-fluid"
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "0 0 50px #cbcbcb", // White box shadow
                  }}
                  alt="Your Image Alt Text"
                />
              </div>
            </Col>
          </Row>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="mt-5 card p-4 text-light"
            style={{
              background:
                "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
              border: "none",
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <h5 className="text-center">Monitoring 100,000+ websites</h5>
            </div>

            <div
              className="d-flex mt-3 justify-content-center gap-4"
              style={{ flexWrap: "wrap" }}
            >
              <div className="mb-2">
                <img
                  src="https://static.uptimia.com/img/trusted-by-ttm-white.png"
                  className="img-fluid"
                  alt="Trusted by TTM"
                />
              </div>
              <div className="mb-2">
                <img
                  src="https://static.uptimia.com/img/trusted-by-akamai-white.png"
                  className="img-fluid"
                  alt="Trusted by Akamai"
                />
              </div>
              <div className="mb-2">
                <img
                  src="https://static.uptimia.com/img/trusted-by-avis-white.png"
                  className="img-fluid"
                  alt="Trusted by Avis"
                />
              </div>
              <div className="mb-2">
                <img
                  src="https://static.uptimia.com/img/trusted-by-nokia-white.png"
                  className="img-fluid"
                  alt="Trusted by Nokia"
                />
              </div>
              <div className="mb-2">
                <img
                  src="https://static.uptimia.com/img/trusted-by-porsche-white.png"
                  className="img-fluid"
                  alt="Trusted by Porsche"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Row1;
