import React from "react";
import { Col, Row } from "reactstrap";
import ChartComponent from "../../../../components/Charts/SpikeCircularProgressBar";
import MetricChart from "../../../../components/Charts/MetricChart";

function Row1() {
  const chartData = [
    { data: "40", color: "#fe3912" },
    { data: "69", color: "#fe3912" },
    { data: "20", color: "#fe3912" },
    { data: "40", color: "#fe3912" },
    { data: "60", color: "#fe3912" },
    { data: "67", color: "#fe3912" },
  ];

  return (
    <Row className="gap-1">
      <Col xl="3" lg="12" md="12" sm="12" xs="12">
        <div
          className="card text-center p-3"
          style={{
            color: "black",
            borderRadius: "8px",
            backgroundColor: "white",
            height: "26rem"
          }}
        >
          <h6>Nodes</h6>
          <p>Number of nodes claimed to Birdseye in the current room</p>
        </div>
      </Col>

    
      <Col xl="8" lg="12" md="12" sm="12" xs="12">
        <div
          className=" card"
          style={{
            border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            overflow: "auto",
          }}
        >
          <MetricChart />
        </div>
      </Col>
      <Col xl="12" lg="12" md="12" sm="12" xs="12">
        <div
          className="p-card"
          style={{
            border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            overflow: "auto",
          }}
        >
          <MetricChart />
        </div>
      </Col>

      <Col xl="12" lg="12" md="12" sm="12" xs="12" className="">
        <div
          className="p-2 card"
          style={{ borderRadius: "8px", backgroundColor: "white" }}
        >
          <div
            style={{
              color: "black",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h6>Nodes by ML</h6>
            <p>Breakdown of the nodes in regards to our ML features</p>
          </div>
          <div
            className="d-flex px-4"
            style={{ justifyContent: "space-evenly" }}
          >
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
                      style={{ border: "5px solid #00d084", height: "21px" }}
                      className="mx-2"
                    ></div>
                    Enable
                  </div>
                  <div className="fw-bolder mx-5">-</div>
                </div>
                <div
                  className="d-flex mt-4"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex ">
                    <div
                      style={{ border: "5px solid gold", height: "21px" }}
                      className="mx-2"
                    ></div>
                    Disabled
                  </div>
                  <div className="fw-bolder mx-5">-</div>
                </div>
                <div
                  className="d-flex mt-4"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex ">
                    <div
                      style={{ border: "5px solid black", height: "21px" }}
                      className="mx-2"
                    ></div>
                    Not Capable
                  </div>
                  <div className="fw-bolder mx-5">-</div>
                </div>
              </div>
            </div>
            <div>
              <ChartComponent data={"0"} color={"#fe3912"} trackColor={'#0f0f0f'} />
            </div>
          </div>
        </div>
      </Col>

      <Col xl="12" lg="12" md="12" sm="12" xs="12">
        <div
          className="p-4 card"
          style={{ borderRadius: "8px", backgroundColor: "white" }}
        >
          <div
            style={{
              color: "black",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h6>Nodes over the type of machine/technology</h6>
            <p>
              Breakdown of the machine/technology where Birdseye is running in
            </p>
          </div>
          <div
            className="d-flex px-4"
            style={{ justifyContent: "space-evenly" }}
          >
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
                      style={{ border: "5px solid #52c8c4", height: "21px" }}
                      className="mx-2"
                    ></div>
                    Bare Metal <i className="bx bx-copy mx-1 mt-1"></i>
                  </div>
                  <div className="fw-bolder mx-5">-</div>
                </div>
                <div
                  className="d-flex mt-4"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex ">
                    <div
                      style={{ border: "5px solid #6990ff", height: "21px" }}
                      className="mx-2"
                    ></div>
                    VM <i className="bx bx-copy mx-1 mt-1"></i>
                  </div>
                  <div className="fw-bolder mx-5">-</div>
                </div>
                <div
                  className="d-flex mt-4"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex ">
                    <div
                      style={{ border: "5px solid #c5aefc", height: "21px" }}
                      className="mx-2"
                    ></div>
                    Container <i className="bx bx-copy mx-1 mt-1"></i>
                  </div>
                  <div className="fw-bolder mx-5">-</div>
                </div>
              </div>
            </div>
            <div>
              <ChartComponent data={"0"} color={"#fe3912"} trackColor={'#0f0f0f'} />
            </div>
            <div className="mt-5 fw-bolder">No data</div>
            <div className="mt-5 fw-bolder">No data</div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Row1;
