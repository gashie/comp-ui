import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row4() {
  return (
    <>
      <div>
        <section
          style={{ height: "auto", backgroundColor: "white", paddingTop: "2rem" }}
          className="custom-container"
        >
          <div className="mt-5 text-center">
            <h1 className="fw-bolder">How does website monitoring work?</h1>
          </div>
          <div className="mt-4 text-center">
            <p className="fw-light text-muted fs-5">
              It only takes a few minutes to get started.
            </p>
          </div>

          <div className="d-flex p-3 p-md-5 justify-content-center align-items-center">
            <div className="text-center">
              <div>
                <img
                  src="https://www.cinnox.com/images/worldmap_cdd3e167c0.svg"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="World Map"
                  width='600'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Row4;
