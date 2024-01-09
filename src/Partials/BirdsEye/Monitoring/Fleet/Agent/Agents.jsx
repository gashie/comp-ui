import movies from "../movies";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import "../style.css";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import TableComponent from "../../../../../Common/DataTable/TableComponent2";
import { useState } from "react";
import AddAgent from "./AddAgent";

const columns = [
  {
    name: "Status",
    button: true,
    center: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              backgroundColor: "#00d084",
              color: "black",
              border: "none",
            }}
          >
            Healthy
          </button>
        </div>
      </div>
    ),
  },

  {
    name: "Host",
    selector: (row) => <p style={{ color: "#Ed8b00" }}>{row.host}t</p>,
    sortable: true,
    center: true,
  },

  {
    name: "Agent policy",
    selector: (row) => (
      <>
        <div className="" style={{ width: "300px" }}>
          <p style={{ color: "#Ed8b00" }}>{row.agent_policy}</p>
          <p>{row.rev}</p>
        </div>
      </>
    ),
    sortable: true,
    center: true,
  },
  {
    name: "CPU",
    selector: (row) => row.CPU,
    sortable: true,
    center: true,
  },
  {
    name: "Memory",
    selector: (row) => row.memory,
    sortable: true,
    center: true,
  },
  {
    name: "Last activity",
    selector: (row) => row.last_activity,
    sortable: true,
    center: true,
  },
  {
    name: "Version",
    selector: (row) => row.version,
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
            <i className="bx bx-dots-horizontal"></i>
          </button>
        </div>
      </div>
    ),
  },
];

function Agents() {
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

  return (
    <div className="p-2" style={{ height: "100svh", backgroundColor: "white" }}>
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
          <div></div>
          <div className="d-flex gap-1">
            <div>
              <Button
                className="btn"
                style={{
                  border: "1px solid #Ed8b00",
                 
                  backgroundColor: "white",
                  color: "#Ed8b00",
                }}
              >
                <i className="bx bx-time-five mx-1"></i>
                Agent activity
              </Button>
            </div>
            <div>
              <Button
 className="btn"
 style={{
   border: "1px solid #Ed8b00",
  
   backgroundColor: "white",
   color: "#Ed8b00",
 }}
              >
                Add Fleet Server
              </Button>
            </div>
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
                Add agent
              </Button>
            </div>
          </div>
        </div>
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <div className="text-dark"></div>
        </div>
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <div>Showing 8 agents</div>
          <div className="d-flex gap-3">
            <div>
              <i
                className="bi bi-bullseye mx-2"
                style={{
                  color: "#Ed8b00",
                  position: "relative",
                  top: "0.08rem",
                }}
              ></i>
              Healthy
            </div>
            <div>
              <i
                className="bi bi-bullseye mx-2"
                style={{ color: "gold", position: "relative", top: "0.08rem" }}
              ></i>
              Unhealthy
            </div>
            <div>
              <i
                className="bi bi-bullseye mx-2"
                style={{
                  color: "#00d084",
                  position: "relative",
                  top: "0.08rem",
                }}
              ></i>
              Updating
            </div>
            <div>
              <i
                className="bi bi-bullseye mx-2"
                style={{ color: "gray", position: "relative", top: "0.08rem" }}
              ></i>
              Offline
            </div>
          </div>
        </div>

        <TableComponent data={movies} columns={columns} />
      </div>

      {/* Off Canvas */}

      {/* <div className="d-flex flex-wrap gap-2">
    <Button color="primary" onClick={toggleTopCanvas}>Toggle Top Offcanvas</Button>
    <Button color="secondary" onClick={toggleRightCanvas}>Toggle Right Offcanvas</Button>
    <Button color="success" onClick={toggleBottomCanvas}>Toggle Bottom Offcanvas</Button>
    <Button color="danger" onClick={toggleLeftCanvas}>Toggle Left Offcanvas</Button>
</div> */}

      <Offcanvas
        isOpen={isRight}
        toggle={toggleRightCanvas}
        id="offcanvasRight"
        direction="end"
        style={{ color: "black", backgroundColor: "white" }}
        className="w-50"
      >
        <OffcanvasHeader toggle={toggleRightCanvas} id="offcanvasRightLabel">
          <h3>Add agent</h3>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <p className="fw-light">
              Add Elastic Agents to your hosts to collect data ans send it to
              the Elastic Stack.
            </p>
            <hr />
            <AddAgent />
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Agents;
