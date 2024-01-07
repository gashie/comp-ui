import ChartComponent from "../../../../components/Charts/SpikeCircularProgressBar";
import MetricChart from "../../../../components/Charts/MetricChart";
import CustomProgressBar from "../../../../components/Common/CustomProgressBar";

function Row2() {
  return (
    <>
      <div
        className="d-flex gap-1 mt-2"
        style={{ height: "40svh", flexWrap: "wrap" }}
      >
        <div
          style={{
            color: "black",
            // border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "",
          }}
          className="p-4 col-xl-3 card"
        >
          <div className="">
            <div>
              <h6>Nodes</h6>
            </div>

            <div>
              <p>
                Summary of your{" "}
                <span style={{ color: "#Ed8b00" }}>
                  {" "}
                  streaming and replication
                </span>{" "}
                status across your nodes
              </p>
            </div>
          </div>

          <div
            className="d-flex px-4"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="col-xl-12 mt-5">
              {" "}
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <div
                    className="d-flex mt-4 mb-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #47c4c0", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      Parents
                    </div>

                    <div className="fw-bolder mx-3">-</div>
                  </div>
                </div>
                <div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #c5aefc", height: "21px" }}
                        className=" mx-2"
                      ></div>
                      Children
                    </div>

                    <div className="fw-bolder mx-3">-</div>
                  </div>
                </div>
              </div>
              <CustomProgressBar
                value={93}
                color="#c5aefc"
                bg="#080a0a"
                height="10px"
                curved={true}
                width="100%"
              />
              <p style={{ color: "transparent" }}>vvvvvvvvvvvvvvvvvvvvvv</p>
            </div>
          </div>
          <div
            className="d-flex px-4"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="col-xl-12 mt-5">
              {" "}
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <div
                    className="d-flex mt-4 mb-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #47c4c0", height: "21px" }}
                        className=" mx-2 "
                      ></div>
                      1
                    </div>

                    <div className="fw-bolder mx-3">0</div>
                  </div>
                </div>
                <div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid #c5aefc", height: "21px" }}
                        className=" mx-2"
                      ></div>
                      2
                    </div>

                    <div className="fw-bolder mx-3">0</div>
                  </div>
                </div>
                <div>
                  <div
                    className="d-flex mt-4"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex ">
                      <div
                        style={{ border: "5px solid orange", height: "21px" }}
                        className=" mx-2"
                      ></div>
                      >2
                    </div>

                    <div className="fw-bolder mx-3">0</div>
                  </div>
                </div>
              </div>
              <CustomProgressBar
                value={3}
                color="#25d366"
                bg="black"
                height="10px"
                curved={true}
                width="100%"
              />
              <p style={{ color: "transparent" }}>vvvvvvvvvvvvvvvvvvvvvv</p>
            </div>
          </div>
        </div>

        <div
          style={{
            // border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
          }}
          className="col-xl-3 p-4 card"
        >
          <div className="">
            <div>
              <h6>Nodes by O/S version</h6>
            </div>

            <div>
              <p>
                Breakdown of the nodes in regards to the O/S version they are
                running
              </p>
            </div>
          </div>

          <div
            className="d-flex px-4 fw-bolder "
            style={{ justifyContent: "space-evenly", marginTop: "9rem" }}
          >
            No Data
          </div>
        </div>
        <div
          style={{
            // border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
          }}
          className="col-xl-5 p-4 card"
        >
          <div className="">
            <div>
              <h6>Nodes by Agent version</h6>
            </div>

            <div>
              <p>
                Breakdown of the nodes in regards to the Agent version running
                on them
              </p>
            </div>
          </div>

          <div
            className="d-flex px-4 fw-bolder "
            style={{ justifyContent: "space-evenly", marginTop: "9rem" }}
          >
            No Data
          </div>
        </div>
      </div>

      <div
        style={{
          color: "black",
          // border: "1px solid transparent",
          borderRadius: "8px",
          backgroundColor: "white",
          height: "40svh",
        }}
        className="p-4 mt-1 col-xl-12 card"
      >
        <div className="">
          <div>
            <h6>Active Alerts</h6>
          </div>

          <div>
            <p>
              Breakdown of the active alerts by status across all live nodes
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
                    style={{ border: "5px solid red", height: "21px" }}
                    className=" mx-2 "
                  ></div>
                  Critical <i className="bx bx-copy mx-1 mt-1"></i>
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
                    className=" mx-2 "
                  ></div>
                  Warning <i className="bx bx-copy mx-1 mt-1"></i>
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

export default Row2;
