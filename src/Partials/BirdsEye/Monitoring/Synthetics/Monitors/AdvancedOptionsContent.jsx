import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button } from "reactstrap";
import { CiCirclePlus } from "react-icons/ci";
import PostmanForm from "./RequestBodyForm";

// import {
//   Button,
//   ButtonGroup,
//   ButtonToolbar,
//   Spinner,
//   UncontrolledAlert,
// } from "reactstrap";

function AdvancedOptionsContent() {
  return (
    <>
      <VerticalTimeline
        layout="1-column-left"
        lineColor="transparent"
        animate="true"
        className="w-100"
      >
        <div>
          <table>
            <tr>
              <td style={{ width: "40%" }}>
                <div>
                  <h6 className="fw-bolder">Data options</h6>
                  <p className="text-muted">
                    Configure data options to add context to the data coming
                    from your monitors.
                  </p>
                </div>
              </td>

              <td>
                <div className="mt-3 mx-2">
                  <h6>Tags</h6>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      //   value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </div>
                  <p className="text-muted">
                    A list of tags whtat will be sent with each monitor event.
                    useful for searching and segmenting data.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "40%" }}></td>

              <td>
                <div className="mt-5 mx-2">
                  <h6>APM service name</h6>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      //   value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </div>
                  <p className="text-muted">
                    Corresponds to the service.name ECS Field frrom APM. Set
                    this to enable integrations between APm and Synthetic data.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "40%" }}></td>

              <td>
                <div className="mt-5 mx-2">
                  <h6 className="fw-bolder">Default stream namesapce</h6>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      //   value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </div>
                  <p className="text-muted">
                    Change the default namespace. This setting changes the name
                    of the monitor's data stream.
                  </p>
                </div>
              </td>
            </tr>
          </table>

          {/* Second side */}
          <table>
            <tr>
              <td style={{ width: "40%" }}>
                <div>
                  <h6 className="fw-bolder">Request configuration</h6>
                  <p className="text-muted">
                    Configure an optional request to send to the remote host
                    including method, body and headers.
                  </p>
                </div>
              </td>

              <td>
                <div className="mt-3 mx-2">
                  <h6>Username</h6>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      //   value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </div>
                  <p className="text-muted">
                    Username for authenticating with the server
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "40%" }}></td>

              <td>
                <div className="mt-5 mx-2">
                  <h6>Password</h6>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      //   value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </div>
                  <p className="text-muted">
                    Password for authenticatiing with the server.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "40%" }}></td>

              <td>
                <div className="mt-5 mx-2">
                  <h6 className="fw-bolder">Request method</h6>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      //   value="Optional description"
                      placeholder="GET"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </div>
                  <p className="text-muted">The HTTP method to use</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "40%" }}></td>

              <td>
                <div className="mt-5 mx-2">
                  <h6 className="fw-bolder">Request headers</h6>
                  <div className="text-end">
                    <Button
                      className="btn  mb-3 mt-3 p-3 px-5 fw-bolder"
                      style={{ backgroundColor: "#ffb23a", border: "none" }}
                    >
                      <CiCirclePlus className="fs-2 mx-2 fw-bolder" />
                      Add header
                    </Button>
                  </div>
                  <p>
                    A dictionary of additional HTTP headers to send. By default
                    the client will se the User-Agent header to indentify itself{" "}
                  </p>
                  <div>
                    <PostmanForm />
                  </div>
                  <p className="text-muted">Request body content</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </VerticalTimeline>
    </>
  );
}

export default AdvancedOptionsContent;
