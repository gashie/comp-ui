import  { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import {
//   Button,
//   ButtonGroup,
//   ButtonToolbar,
//   Spinner,
//   UncontrolledAlert,
// } from "reactstrap";

function AddAgentPolicy() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

  return (
    <>
      <VerticalTimeline
        layout="1-column-left"
        lineColor="transparent"
        animate="true"
        className="w-100"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-100"
          contentStyle={{
            background: "transparent",
            color: "balck",
            border: "1px solid transparent",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  gray",
            display: "none",
          }}
          iconStyle={{ background: "black", color: "black", display: "none" }}
          icon={
            <p className="fs-3 mx-3" style={{ display: "none" }}>
              1
            </p>
          }
        >
          <div className="">
            {" "}
            <h5 className="vertical-timeline-element-title">Name</h5>
            {/* <h6 className="vertical-timeline-element-subtitle">
              Type of hosts are controlled by an{" "}
              <span style={{ color: "#Ed8b00" }}>agent policy</span> Choose an
              agent policy or create a new one.
            </h6> */}
            <select
              className="form-control mt-2"
              value={selectedOption}
              onChange={handleSelectChange}
              style={{
                border: "1px solid #Ed8b00",
                // backgroundColor: "white",
                color: "gray",
                outline: "none",
              }}
            >
              <option value="option1">CAL_DR_Docker_GTM_01</option>
              <option value="option2">CAL_DR_Docker_GTM_01</option>
              <option value="option3">CAL_DR_Docker_GTM_01</option>
            </select>
            <p>
              The selected agaent policy will collect data for{" "}
              <strong>2</strong> integrations:
            </p>
            <div className="d-flex gap-1"></div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-100"
          contentStyle={{
            background: "transparent",
            color: "balck",
            border: "1px solid transparent",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  gray",
            display: "none",
          }}
          iconStyle={{ background: "black", color: "black", display: "none" }}
          icon={
            <p className="fs-3 mx-3" style={{ display: "none" }}>
              1
            </p>
          }
        >
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Descriptions
                    <br />
                    Add a description of how this policy will be used.
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <input
                      className="form-control"
                      type="text"
                      value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Defalt namespace
                    <br />
                    Namespaces are a user-configurable arbitrary grouping that
                    makes it wasier to seach for data ans manage user
                    permissions. A policy namespace is used to name its
                    integrations data streams.{" "}
                    <span style={{ color: "#Ed8b00", cursor: "pointer" }}>
                      Learn more
                    </span>
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <input
                      className="form-control"
                      type="text"
                      value="Optional description"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Agent monitoring
                    <br />
                    Collecting monitoring logs and metrics will also create an
                    elastic Agen integration. Monitoring data will be written to
                    the default namespace specifiex above.
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox1"
                        value="Optional description 1"
                        style={{
                          border: "1px solid #Ed8b00",
                          backgroundColor: "white",
                          color: "gray",
                        }}
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="checkbox1"
                      >
                        Collect agent logs
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox2"
                        value="Optional description 2"
                        style={{
                          border: "1px solid #Ed8b00",
                          backgroundColor: "white",
                          color: "gray",
                        }}
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="checkbox2"
                      >
                        Collect agent metrics
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Inactivity timeout
                    <br />
                    An optional timeout in seconds. If provided, an agent will
                    automatically change to inactive status and be filtered out
                    of the agents list. A maximum of 750 agent policies can have
                    an inactivity timeout.
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <input
                      className="form-control"
                      type="text"
                      value="1203000"
                      style={{
                        border: "1px solid #Ed8b00 ",
                        backgroundColor: "white",
                        color: "gray",
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Fleet Server
                    <br />
                    Select to which Fleet Server the agents in this policy will
                    communicate
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <select
                      className="form-control mt-2"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "1px solid #Ed8b00",
                        backgroundColor: "white",
                        color: "gray",
                        outline: "none",
                      }}
                    >
                      <option value="option1">
                        Fefault (currently Default)
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Output for integrations
                    <br />
                    Select which output to use for data from integrations.
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <select
                      className="form-control mt-2"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "1px solid #Ed8b00",
                        backgroundColor: "white",
                        color: "gray",
                        outline: "none",
                      }}
                    >
                      <option value="option1">
                        Fefault (currently Default)
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    Output for agent monitoring
                    <br />
                    Select which output to use for the agents own monitoring
                    data.
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <select
                      className="form-control mt-2"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "1px solid #Ed8b00",
                        backgroundColor: "white",
                        color: "gray",
                        outline: "none",
                      }}
                    >
                      <option value="option1">
                        Fefault (currently Default)
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                  Agent Binary Download
                    <br />
                    When an upgrade action is issued that agents will download the binary from this location
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <select
                      className="form-control mt-2"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "1px solid #Ed8b00",
                        backgroundColor: "white",
                        color: "gray",
                        outline: "none",
                      }}
                    >
                      <option value="option1">
                        Fefault (currently Default)
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                Unemrollment timeout
                    <br /> An optional timeout in seconds. If provided, and fleet server is below version 8.70, an agent will automatically unenroll after being gone for this period of time.
                  </td>
                  <td
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                    className="text-dark"
                  >
                    <select
                      className="form-control mt-2"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "1px solid #Ed8b00",
                        backgroundColor: "white",
                        color: "gray",
                        outline: "none",
                      }}
                    >
                      <option value="option1">
                        Fefault (currently Default)
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default AddAgentPolicy;
