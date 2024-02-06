// import movies from "../movies";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import { GoAlert } from "react-icons/go";
import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Input,
  InputGroup,
  InputGroupText,
  Card,
} from "reactstrap";
import TableComponent from "../../../../../Common/DataTable/TableComponent2";
import { IoEyeOutline } from "react-icons/io5";
// import AddAgent from "./AddAgent";
import { FiAlertTriangle } from "react-icons/fi";

import { BsTrash3 } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
// import Overview from "./Overview";
// import Management from "./Management";
// import CreateMonitor from "./CreateMonitor";

const data = [
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
  {
    location: "BIRDSEYE-HQ-MAIN",
    monitors: "836",
    agent_policy: "TestOnly",
    agents: "0",
    tags: [{ name: "BIRDSEYEBOX" }, { name: "HQ" }],
  },
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
    name: "Actions",
    selector: (row) => row.runtime,
    button: true,
    center: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn fs-5 mt-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              backgroundColor: "",
              color: "white",
              border: "none",
            }}
          >
            <BsTrash3 style={{ color: "gray" }} className="fw-lighter" />
            <IoEyeOutline
              style={{ color: "gray" }}
              className="fw-lighter mx-2"
            />
          </button>
        </div>
      </div>
    ),
  },
  {
    name: "Alert Status",
    button: true,
    center: true,
    selector: (row) => (
      <p
        style={{
          color: "white",
          backgroundColor: "#ec255a",
          borderRadius: "30px",
        }}
        className="p-2 px-4 mt-2"
      >
        {"Active"}
      </p>
    ),
  },
  {
    name: "Last update",
    width: "320px",
    left: true,
    selector: (row) => (
      <p style={{ color: "" }}>{"Feb 2, 2024 20:35:20.706(UTC0)"}</p>
    ),
  },

  {
    name: "Duration",
    selector: (row) => <p style={{ color: "" }}>{"2,242 h"}</p>,
    sortable: true,
    button: true,
    center: true,
  },
  {
    name: "Reason",
    selector: (row) => (
      <p style={{ color: "#f99401" }}>
        {
          "Monitor 'Agency Banking Sever  - Tableau Business Intelligence Analysis' from BIRDSEYE-HQ-MAIN is down. Checked at February 1,2024 2:18PM."
        }
      </p>
    ),
    sortable: true,
    left: true,
  },
];

function Index() {
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

  const [overview, setOverview] = useState("all");

  return (
    <div className="p-2" style={{ height: "100svh", backgroundColor: "white" }}>
      {/* <div
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
      </div> */}

      {/* content */}

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="w-100">
          <InputGroup>
            <InputGroupText
              style={{ backgroundColor: "#ffa500", color: "white" }}
            >
              <IoFilter />
            </InputGroupText>
            <Input
              placeholder="Search alerts (e.g kibana.alert.evaluation.threshold ? 75)"
              className="p-3"
            />
          </InputGroup>
        </div>
        <br />

        <div className="mx-2" style={{ width: "max-content" }}>
          <Input
            placeholder="Search alerts (e.g kibana.alert.evaluation.threshold ? 75)"
            className="p-3"
            type="date"
          />
        </div>

        <div className="mx-2" style={{ width: "max-content" }}>
          Last 24 hours
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#ffb23a",
              color: "white",
              border: "none",
            }}
            className="py-3 px-4"
          >
            Refresh
          </Button>
        </div>
      </div>

      <div
        className="card mt-4"
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
                  color: overview === "all" ? "white" : "black",
                  backgroundColor: overview === "all" ? "orange" : "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                className="p-2"
                onClick={() => {
                  setOverview("all");
                }}
              >
                Show all
              </div>
              <div
                className="p-2"
                onClick={() => {
                  setOverview("active");
                }}
                style={{
                  color: overview === "active" ? "white" : "black",
                  backgroundColor: overview === "active" ? "orange" : "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Active
              </div>
              <div
                className="p-2"
                onClick={() => {
                  setOverview("recovered");
                }}
                style={{
                  color: overview === "recovered" ? "white" : "black",
                  backgroundColor:
                    overview === "recovered" ? "orange" : "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Recovered
              </div>
            </div>
          </div>
          <div className="d-flex gap-1"></div>
        </div>

        {/* {overview === true ? <Overview /> : <Management />} */}
      </div>

      <div className="d-flex m-3 gap-4 align-items-center mt-5 mb-5">
        <div>
          <h1 style={{ color: "#6990ff" }} className="fw-bolder">
            377
          </h1>
          <p className="text-muted ">Alerts</p>
        </div>
        <div>
          <h1 style={{ color: "red" }} className="fw-bolder">
            377 <GoAlert className="fs-5" />
          </h1>
          <p className="text-muted ">Active now</p>
        </div>
      </div>

      <div className="mt-4">
        <Card style={{ height: "300px" }}>
          <div className="d-flex justify-content-center align-items-center mt-5 fw-lighter">
            <p className="fw-lighter fs-5">No data found</p>
          </div>
        </Card>
      </div>

      <div className="mt-4">
        <TableComponent data={data} columns={columns} />
      </div>

      <Offcanvas
        isOpen={isRight}
        toggle={toggleRightCanvas}
        id="offcanvasRight"
        direction="end"
        style={{ color: "black", backgroundColor: "white" }}
        className="w-50"
      >
        <OffcanvasHeader toggle={toggleRightCanvas} id="offcanvasRightLabel">
          <h3>Create Monitor</h3>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            {/* <p className="fw-light">
              Add Elastic Agents to your hosts to collect data ans send it to
              the Elastic Stack.
            </p> */}
            <hr />
            {/* <CreateMonitor /> */}
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Index;
