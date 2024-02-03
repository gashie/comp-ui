import React from "react";
import { Card } from "reactstrap";
import { FiAlertTriangle } from "react-icons/fi";

import { BsTrash3 } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";

function Overview() {
  return (
    <>
      <div className="row g-3 mt-5">
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              {/* content */}
              <div className="px-4 py-3">
                <h4 className="fw-bolder fs-5">Current status</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center p-3">
                <div>
                  <div
                    className="fs-1 fw-bolder text-center"
                    style={{ color: "#00d084 " }}
                  >
                    0
                  </div>
                  <div className="text-center fs-5 fw-lighter">Up</div>
                </div>
                <div>
                  <div
                    className="fs-1 fw-bolder text-center"
                    style={{ color: "#ec255a" }}
                  >
                    0
                  </div>
                  <div className="text-center fs-5 fw-lighter">Down</div>
                </div>
                <div>
                  <div
                    className="fs-1 fw-bolder text-center"
                    style={{ color: "gray" }}
                  >
                    0
                  </div>
                  <div className="text-center fs-5 fw-lighter">Disabled</div>
                </div>
                <div>
                  <div
                    className="fs-1 fw-bolder text-center"
                    style={{ color: "gray" }}
                  >
                    0
                  </div>
                  <div className="text-center fs-5 fw-lighter">Pending</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-xl-4">
          <Card className="p-3">
            {/* container */}
            <div>
              {/* content */}
              <div className="px-4 py-3">
                <h4 className="fw-bolder fs-5">Current status</h4>
              </div>

              <div
                className="d-flex justify-content-center align-items-center mt-4"
                style={{ fontSize: "0.8rem", color: "gray" }}
              >
                No results found
              </div>

              <div
                className="mt-5  d-flex justify-content "
                style={{ width: "max-content" }}
              >
                <div
                  className="px-4 py-1 text-dark mx-2 mt-2"
                  style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
                >
                  <FiAlertTriangle />
                </div>
                <div
                  className="px-4 py-1 text-dark mx-2 mt-2"
                  style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
                >
                  <FiAlertTriangle />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-xl-5">
          <Card className="p-3">
            {/* container */}
            <div>
              {/* content */}
              <div className="px-4 py-3">
                <h4 className="fw-bolder fs-5">Current status</h4>
              </div>

              <div
                className="d-flex justify-content-center align-items-center mt-4"
                style={{ fontSize: "0.8rem", color: "gray" }}
              >
                No results found
              </div>

              <div
                className="mt-5 d-flex justify-content "
                style={{ width: "max-content" }}
              >
                <div
                  className="px-4 py-1 text-dark mx-2 mt-2"
                  style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
                >
                  <FiAlertTriangle />
                </div>
                <div
                  className="px-4 py-1 text-dark mx-2 mt-2"
                  style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
                >
                  <FiAlertTriangle />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-3 my-4 d-flex justify-content-between">
        <div>
          Showing <b>836 Monitors</b>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <div>Sort by Status</div>
          <div>Group by None</div>
        </div>
      </div>

      {/* second row */}
      <div className="row g-3">
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              <div className="fw-bolder">Transflow Bill Payment Live</div>
              <div>BIRDSEYE-HQ-MAIN</div>
            </div>

            <div className="text-end">
              <div style={{ fontSize: "0.7rem" }}>Duration</div>
              <div className="fs-1 fw-bolder">0 ms</div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Overview;
