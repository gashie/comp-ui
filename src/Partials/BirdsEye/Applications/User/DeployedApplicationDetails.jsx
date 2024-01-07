import { useState } from "react";
// import { useSelector } from "react-redux";
//import { Form } from "reactstrap";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from "reactstrap";

// import "./index.css";
import img from "../../../../assets/images/img.png";
import dep from "./img.png";

const Index = () => {
  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };
  const [isPermission, setIsPermission] = useState(false);
  const togglePermissionCanvas = () => {
    setIsPermission(!isPermission);
  };

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
                <h2 className="fw-bold mb-xl-2">Businesss Application</h2>
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

                <Button
                  style={{
                    border: "1px solid transparent",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "#Ed8b00",
                  }}
                >
                  View Deployment
                </Button>
                <Button
                  style={{
                    border: "1px solid transparent",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "#Ed8b00",
                  }}
                  onClick={() => {
                    setIsPermission(true);
                  }}
                  className="mx-2"
                >
                  Domains
                </Button>
              </div>

              <div></div>

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

        <div className="card mb-3">
          <div className="card-body">
            <div className="row g-4 li_animate">
              <div className="col-xl-12 col-lg-12">
                <div className=" gap-3 " style={{ flexWrap: "wrap" }}>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h3 className="fw-bolder">Production Environment</h3>
                    </div>
                    <div
                      className="d-flex gap-1"
                      style={{ width: "max-content" }}
                    >
                      <Button
                        style={{
                          border: "1px solid #Ed8b00",
                          color: "#Ed8b00",

                          backgroundColor: "white",
                          width: "max-content",
                        }}
                        className="btn btn-light"
                      >
                        Build Logs
                      </Button>
                      <Button
                        style={{
                          border: "1px solid #Ed8b00",
                          color: "#Ed8b00",

                          backgroundColor: "white",
                        }}
                        className="btn btn-light"
                      >
                        Runtime Logs
                      </Button>
                      <Button
                        style={{
                          border: "1px solid #Ed8b00",
                          color: "#Ed8b00",

                          backgroundColor: "white",
                        }}
                        className="btn btn-light"
                      >
                        Instant Rollback
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted">
                      This production environment is available
                    </p>
                  </div>
                </div>

                <table className="mt-5">
                  <tr>
                    <td>
                      <img
                        src={dep}
                        className="img-fluid"
                        width="500"
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      ></img>
                    </td>
                    <td className="px-5">
                      <div>
                        <div className="text-muted">Deployment Domain</div>
                        <div className="fw-bolder">
                          https://be360-rty3434.app
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="text-muted">Status</div>
                        <div className="text-dark">
                          <i
                            className="fa fa-circle mx-2"
                            style={{ color: "green" }}
                          ></i>
                          Ready
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-muted">Created</div>
                        <div className="text-dark">41days ago</div>
                      </div>
                      <div className="mt-3">
                        <div className="text-muted">Source</div>
                        <div className="text-dark">
                          {" "}
                          <i className="fa fa-code-fork mx-2"></i>/applications
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-4 mt-5 text-muted">
          To update your Production Deployment, push to the /application
          directory.
        </div>

        <div className="card p-4 mt-5 text-muted">
          <div
            className="p-2"
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
                  [11:42:09.698] Running build in Washington, D.C., USA (East) –
                  iad1 (Hive)
                </div>
                <div>
                  [11:42:09.698] Commit: b967079) [11:42:12.602] Cloning
                  completed: 562.948ms iad1 (Hive)
                </div>
                <div>
                  [11:42:12.038] Cloning
                  github.com/mathiaslawson/Monitoring-Dashboard (Branch: master,
                  iad1 (Hive)
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

      <Offcanvas
        isOpen={isPermission}
        toggle={togglePermissionCanvas}
        id="offcanvasRight"
        direction="end"
        style={{ color: "black", backgroundColor: "white" }}
        className="py-5"
      >
        <OffcanvasHeader toggle={toggleRightCanvas} id="offcanvasRightLabel">
          <h3>Add Permission</h3>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <p className="fw-lighter text-muted" style={{ fontSize: "0.8em" }}>
              Agent policies are used to manage settings acroos a group of
              agents You can dd integrations to your agent policy to sepcify
              what your agents collect. When you edit an agent policy, you can
              use Fleet to deploy updates to be a specified group of agents.
            </p>
            <hr />

            <form>
              <div className="row">
                <div className="mb-3 col-md-12 col-12">
                  <label className="col-form-label">Permission</label>
                  <fieldset className="form-icon-group left-icon position-relative">
                    <input type="text" className="form-control" />
                    <div className="form-icon position-absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </div>
                  </fieldset>
                </div>
                <div className="mb-3 col-md-12 col-12">
                  <label className="col-form-label">Description</label>
                  <fieldset className="form-icon-group left-icon position-relative">
                    <input type="text" className="form-control" />
                    <div className="form-icon position-absolute">
                      <i className="bi-list"></i>
                    </div>
                  </fieldset>
                </div>

                <div className="col-12">
                  <button
                    className="me-1 btn btn-dark"
                    type="button"
                    style={{ backgroundColor: "black" }}
                  >
                    <i className="bi-plus"></i> Add
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                      setIsPermission(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Index;
