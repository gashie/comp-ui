import { useState } from "react";
// import { useSelector } from "react-redux";
//import { Form } from "reactstrap";
import { Input } from "reactstrap";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
  Container,
} from "reactstrap";
import DataTable from "../../../../Common/DataTable/DataTable";
import ApplicationCard from "../ApplicationCard";
// import "./index.css";
import img from "../../../../assets/images/img.png";
import { Link } from "react-router-dom";

const DeployProcess = () => {
  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };
  const [isPermission, setIsPermission] = useState(false);
  const togglePermissionCanvas = () => {
    setIsPermission(!isPermission);
  };

  const columns = [
    {
      Header: "Roles",
      accessor: "name", // Replace with the actual accessor for your data
      Cell: ({ value }) => <span style={{ color: "black" }}>{value}</span>,
    },
    {
      Header: "Application Deployments",
      accessor: "namse",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "Setup Monitoring",
      accessor: "",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "Change Passwords",
      accessor: "2",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "Setup Databases",
      accessor: "3",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "Manage Users",
      accessor: "5",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    // Add more columns as needed
  ];

  // Sample data
  const data = [
    { name: "System Admin", age: 30 },
    { name: "General User", age: 25 },
    { name: "Foreign User", age: 25 },
    { name: "Unsubscribed User", age: 25 },
    { name: "Gold Users", age: 25 },
    { name: "Silver Users", age: 25 },
    { name: "Bronze Users", age: 25 },
    { name: "Platimun Users", age: 25 },
    // Add more data as needed
  ];

  return (
    <>
      <div className="px-4 py-3 page-body" style={{}}>
        <div
          className="card mb-3"
          style={{
            background:
              "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
            color: "white",
          }}
        >
          <div className="card-body">
            <div className="row g-4 li_animate">
              <div className="col-xl-8 col-lg-8">
                <h2 className="fw-bold mb-xl-2">Deploy Application</h2>
                <p
                  className="fw-lighter text-light w-100"
                  style={{ fontSize: "0.8em" }}
                >
                  Agent policies are used to manage settings across a group of
                  agents. You can add integrations to your agent policy to
                  specify what your agents collect. When you edit an agent
                  policy, you can use Fleet to deploy updates to a specified
                  group of agents.
                </p>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex justify-content-end">
                <img
                  src={img}
                  alt="Your Image"
                  className="img-fluid"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-xxl-3 col-xl-8 col-lg-12 col-md-12">
            <div className="card">
              <div className="card-header">
                {/* <h6 className="card-title mb-0">Configure</h6> */}
              </div>

              <div
                className="card-body custom_scroll"
                style={{ height: "220px" }}
              >
                <div>
                  <label className="fw-bolder text-muted">
                    Select Project Directory
                  </label>
                  <Input type="file" className="mt-4"></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-4 col-lg-12 col-md-18">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title mb-0 fw-bolder">Configure Project</h3>
                <hr className="mt-2" />
                <div className="dropdown card-action"></div>
              </div>
              <div
                className="card-body custom_scroll"
                style={{ height: "auto" }}
              >
                <div>
                  <label className="fw-light text-muted">Project Name</label>
                  <Input type="text" className="mt-2 p-3"></Input>
                </div>
                <div>
                  <label className="fw-light text-muted mt-4">
                    Framework Preset
                  </label>
                  <Input
                    type="text"
                    className="mt-2 p-3"
                    placeholder="eg. CRA, Angular, Hugo, Astro"
                  ></Input>
                </div>
                <div>
                  <label className="fw-light text-muted mt-4">
                    Root Directory
                  </label>
                  <Input
                    type="text"
                    className="mt-2 p-3"
                    placeholder="./"
                  ></Input>
                </div>

                <h6 className="mt-4 text-muted fw-bolder">
                  Build and Output Settings
                </h6>
                <div>
                  <label className="fw-light text-muted mt-4">
                    Build Command
                  </label>
                  <Input
                    type="text"
                    className="mt-2 p-3"
                    placeholder="npm run build or react-scripts build"
                  ></Input>
                </div>
                <div>
                  <label className="fw-light text-muted mt-4">
                    Output Directory
                  </label>
                  <Input
                    type="text"
                    className="mt-2 p-3"
                    placeholder="build or dist"
                  ></Input>
                </div>
                <div>
                  <label className="fw-light text-muted mt-4">
                    Install Command
                  </label>
                  <Input
                    type="text"
                    className="mt-2 p-3"
                    placeholder="yarn install or npm install or pnpm intall"
                  ></Input>
                </div>

                <label className="fw-bolder text-muted mt-4">
                  Environmental Variables
                </label>
                <div className="row g-3">
                  <div className="col-xl-6 col-md-6">
                    <label className="fw-light text-muted mt-4">Key</label>
                    <Input
                      type="text"
                      className="mt-2 p-3"
                      placeholder="KEY_NAME"
                    ></Input>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <label className="fw-light text-muted mt-4">Value</label>
                    <Input
                      type="text"
                      className="mt-2 p-3"
                      placeholder="name"
                    ></Input>
                  </div>
                </div>
                <div className="mt-2">
                  <Button className="btn btn-dark px-5 py-2">Add</Button>
                </div>
              </div>
            </div>
            <div className="mt-5 w-100 col-xl-12">
              <Link to='/app/application-details'>
                <Button className="btn btn-dark w-100 p-3">Deploy</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-4">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="card">
              <div className="card-header">
                {/* <h6 className="card-title mb-0">Configure</h6> */}
              </div>

              <div className="card-body custom_scroll" style={{ height: "" }}>
                <div>
                  <div
                    className="p-2 text-light"
                    style={{ backgroundColor: "#17161a", borderRadius: "10px" }}
                  >
                    Building{" "}
                    <i
                      className="fa fa-check-circle-o"
                      style={{ color: "#00d084" }}
                    ></i>
                  </div>
                  <div className="px-1 mt-1">
                    <div className="d-flex gap-1">
                      <p
                        className="mt-3 py-2 px-3"
                        style={{
                          backgroundColor: "#fed104",
                          color: "black",
                          borderRadius: "20px",
                          width: "max-content",
                        }}
                      >
                        Deployment build Logs (12)
                      </p>
                      <p
                        className="mt-3 py-2 px-3"
                        style={{
                          backgroundColor: "#fed104",
                          color: "black",
                          borderRadius: "20px",
                          width: "max-content",
                        }}
                      >
                        Errors (0)
                      </p>
                      <p
                        className="mt-3 py-2 px-3"
                        style={{
                          backgroundColor: "#fed104",
                          color: "black",
                          borderRadius: "20px",
                          width: "max-content",
                        }}
                      >
                        Warning (0)
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: "black",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      className="p-4"
                    >
                      <code className="text-primary" style={{ color: "green" }}>
                        <div>
                          [11:42:09.698] Running build in Washington, D.C., USA
                          (East) – iad1 (Hive)
                        </div>
                        <div>
                          [11:42:09.698] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms iad1 (Hive)
                        </div>
                        <div>
                          [11:42:12.038] Cloning
                          github.com/mathiaslawson/Monitoring-Dashboard (Branch:
                          master, iad1 (Hive)
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                        <div>
                          [11:42:09.698] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms iad1 (Hive)
                        </div>{" "}
                        <div>
                          [11:42:09.698] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms iad1 (Hive)
                        </div>{" "}
                        <div>
                          [11:42:09.698] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms iad1 (Hive)
                        </div>{" "}
                        <div>
                          [11:42:09.698] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms iad1 (Hive)
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                        <div>
                          [11:42:12.038] Commit: b967079) [11:42:12.602] Cloning
                          completed: 562.948ms
                        </div>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeployProcess;
