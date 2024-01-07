import React from "react";
import ChartComponent from "./SpikeCircularProgressBar";

function MetricChart() {
  return (
    <>
      <div
        style={{
          color: "black",
          // border: "1px solid transparent",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
        className="p-4 card col-xl-12"
      >
        <div className="">
          <div>
            <h6>Nodes by Status</h6>
          </div>

          <div>
            <p>
              Breakdown of the nodes by their status in regards to Birdeye's
            </p>
          </div>
        </div>

        <div className="d-flex px-4" style={{ justifyContent: "space-evenly" }}>
          <div
            className="mt-5 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="">
              <div
                className="d-flex mt-4"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex ">
                  <div
                    style={{ border: "5px solid #Ed8b00", height: "21px" }}
                    className=" mx-2 "
                  ></div>
                  Live <i className="bx bx-copy mx-1 mt-1"></i>
                </div>

                <div className="fw-bolder mx-5">-</div>
              </div>
              <div
                className="d-flex mt-4"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex ">
                  <div
                    style={{ border: "5px solid gray", height: "21px" }}
                    className=" mx-2 "
                  ></div>
                  Stale <i className="bx bx-copy mx-1 mt-1"></i>
                </div>

                <div className="fw-bolder mx-5">-</div>
              </div>
              <div
                className="d-flex mt-4"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex ">
                  <div
                    style={{ border: "5px solid #aebbbb", height: "21px" }}
                    className=" mx-2 "
                  ></div>
                  Offline <i className="bx bx-copy mx-1 mt-1"></i>
                </div>

                <div className="fw-bolder mx-5">-</div>
              </div>
              <div
                className="d-flex mt-4"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex ">
                  <div
                    style={{ border: "5px solid #f3de84", height: "21px" }}
                    className=" mx-2 "
                  ></div>
                  Unseen <i className="bx bx-copy mx-1 mt-1"></i>
                </div>

                <div className="fw-bolder mx-5">-</div>
              </div>
            </div>
          </div>

          <div>
            <ChartComponent data={"0"} color={"#fe3912"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MetricChart;
