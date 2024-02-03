// import movies from "../movies";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Card,
} from "reactstrap";
import TableComponent from "../../../../../Common/DataTable/TableComponent2";
// import AddAgent from "./AddAgent";
import { FiAlertTriangle } from "react-icons/fi";

import { BsTrash3 } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import Overview from "./Overview";
import Management from "./Management";

const data = [
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
];

const columns = [
  {
    name: "Location name",
    button: true,
    center: true,
    selector: (row) => <p style={{ color: "" }}>{row.location}</p>,
  },

  {
    name: "Monitors",
    selector: (row) => <p style={{ color: "#Ed8b00" }}>{row.monitors}</p>,
    sortable: true,
    center: true,
  },
  {
    name: "Agent Policy",
    selector: (row) => (
      <>
        <div className="d-flex justify-content-center align-items-center">
          <div>{row?.agent_policy}</div>
          <div
            className="px-4 py-1 text-dark mx-2"
            style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
          >
            Agent: {row?.agents}
          </div>
        </div>
      </>
    ),
    sortable: true,
    center: true,
  },

  {
    name: "Tags",
    selector: (row) => (
      <>
        <div className="d-flex justify-content-center align-items-center">
          {row.tags.map((item, key) => {
            return (
              <div
                key={key}
                className="px-4 py-1 text-dark mx-2"
                style={{ backgroundColor: "#eaeaea", borderRadius: "4px" }}
              >
                {item.name}s
              </div>
            );
          })}
        </div>
      </>
    ),
    sortable: true,
    center: true,
  },

  {
    name: "Actions",
    selector: (row) => row.runtime,
    sortable: true,
    center: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn fs-3 mt-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              backgroundColor: "",
              color: "white",
              border: "none",
            }}
          >
            <BsTrash3 style={{ color: "gray" }} className="fw-lighter" />
          </button>
        </div>
      </div>
    ),
  },
];

function Monitors() {
  const [isTop, setIsTop] = useState(false);
  const toggleTopCanvas = () => {
    setIsTop(!isTop);
  };

  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };

  const [isBottom, setIsBottom] = useState(false);
  const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
  };

  const [isLeft, setIsLeft] = useState(false);
  const toggleLeftCanvas = () => {
    setIsLeft(!isLeft);
  };

  const [overview, setOverview] = useState(true);

  return (
    <div className="p-2" style={{ height: "100svh", backgroundColor: "white" }}>
      <div
        className="mt-3 mb-3  text-light  fw-lighter p-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
          fontWeight: "lighter",
          borderRadius: "10px",
        }}
      >
        <h4 className="fw-lighter">
          {" "}
          <FiAlertTriangle style={{ fontSize: "1.2rem" }} className="mx-2" />
          Alerts are not being sent
        </h4>
        You have monitors with alerting enabled, but there is no default
        connector configured to send those alerts
        <div className="d-flex align-items-center mt-4">
          <Button className="btn btn-light">Configure Now</Button>
          <Button className="btn btn-light mx-2">Remind me later</Button>
        </div>
      </div>

      <div
        className="card mt-2"
        style={{
          border: "none ",
          borderRadius: "0px",
          backgroundColor: "white",
        }}
      >
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <div>
            <div
              className="d-flex justify-content-evenly align-items-center gap-2 p-1 px-2"
              style={{ border: "1px solid orange", borderRadius: "40px" }}
            >
              <div
                style={{
                  color: overview === true ? "white" : "black",
                  backgroundColor: overview === true ? "orange" : "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                className="p-2"
                onClick={() => {
                  setOverview(true);
                }}
              >
                Overview
              </div>
              <div
                className="p-2"
                onClick={() => {
                  setOverview(false);
                }}
                style={{
                  color: overview === false ? "white" : "black",
                  backgroundColor: overview === false ? "orange" : "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Management
              </div>
            </div>
          </div>
          <div className="d-flex gap-1">
            <div>
              <Button
                className="btn"
                style={{
                  border: "1px solid #Ed8b00",

                  backgroundColor: "white",
                  color: "#Ed8b00",
                }}
                onClick={() => {
                  toggleRightCanvas();
                }}
              >
                Create Monitor
              </Button>
              <Button
                className="btn mx-2"
                style={{
                  border: "1px solid #Ed8b00",

                  backgroundColor: "white",
                  color: "#Ed8b00",
                }}
                onClick={() => {
                  toggleRightCanvas();
                }}
              >
                <MdRefresh /> Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* <div
          className="d-flex p-2 mt-5"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <div>Showing {data?.length} locations</div>
        </div> */}
        {overview === true ? <Overview /> : <Management />}
      </div>
    </div>
  );
}

export default Monitors;
