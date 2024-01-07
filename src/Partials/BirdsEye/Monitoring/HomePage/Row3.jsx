import { Col } from "reactstrap";
import ChartComponent from "../../../../components/Charts/SpikeCircularProgressBar";
import MetricChart from "../../../../components/Charts/MetricChart";

function Row3() {
  const chartData = [
    { data: "40", color: "#fe3912" },
    { data: "69", color: "#fe3912" },
    { data: "20", color: "#fe3912" },
    { data: "40", color: "#fe3912" },
    { data: "60", color: "#fe3912" },
    { data: "67", color: "#fe3912" },
    //{ data: "60", color: "#Ed8b00" },
    // Add more data objects for additional charts
  ];

  return (
    <>
      <div className="d-flex gap-1 mt-2 col-xl-12" style={{ height: "37svh" }}>
        <div
          style={{
            color: "black",
            // border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            height: "37svh",
          }}
          className="p-4 col-xl-6 card"
        >
          <div className="">
            <div>
              <h6>Users by role</h6>
            </div>

            <div>
              <p>Breakdown of users by thier role</p>
            </div>
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
                      className=" mx-2 "
                    ></div>
                    admin
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
                      className=" mx-2 "
                    ></div>
                    user
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

        <div
          style={{
            // border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
          }}
          className="col-xl-6 p-4 card"
        >
          <div className="">
            <div>
              <h6>Totals Dashboards</h6>
            </div>

            <div>
              <p>Number of the currently available custom dashboards in room</p>
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
    </>
  );
}

export default Row3;
