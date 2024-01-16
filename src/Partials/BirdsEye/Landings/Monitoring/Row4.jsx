import React from "react";
import { Row, Col } from "reactstrap";
import sc from "./scr.png";

function Row4() {
  return (
    <>
      <div>
        <section
          style={{ height: "auto", backgroundColor: "white" }}
          className="custom-container"
        >
          <div className="mt-5">
            <h1 className="fw-bolder">How does website monitoring work?</h1>
          </div>
          <div className="mt-4">
            <p className="fw-light text-muted fs-3">
              It only takes a few minutes to get started.
            </p>
          </div>

          <div className="d-flex p-5 justify-content-center align-items-center">
            <div className="text-center">
              <div>
                <img
                  src="https://www.cinnox.com/images/worldmap_cdd3e167c0.svg"
                  className="img-fluid"
                  width="1000"
                ></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Row4;
