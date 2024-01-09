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

   
    </>
  );
};

export default Index;
