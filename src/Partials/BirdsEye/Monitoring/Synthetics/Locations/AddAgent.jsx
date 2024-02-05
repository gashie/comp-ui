import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Spinner,
  UncontrolledAlert,
} from "reactstrap";

function AddAgent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <VerticalTimeline layout="1-column-left" lineColor="gray" animate="true">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "balck",
            border: "1px solid transparent",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  gray",
            display: "none",
          }}
          iconStyle={{ background: "white", color: "black" }}
          icon={<p className="fs-3 mx-3">1</p>}
        >
          <h5 className="vertical-timeline-element-title">
            What type of host are you adding?
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            Type of hosts are controlled by an{" "}
            <span style={{ color: "#Ed8b00" }}>agent policy</span> Choose an
            agent policy or create a new one.
          </h6>
          <select
            className="form-control mt-2"
            value={selectedOption}
            onChange={handleSelectChange}
            style={{
              border: "1px solid #Ed8b00",
              // backgroundColor: "#080a0a",
              color: "gray",
              outline: "none",
            }}
          >
            <option value="option1">CAL_DR_Docker_GTM_01</option>
            <option value="option2">CAL_DR_Docker_GTM_01</option>
            <option value="option3">CAL_DR_Docker_GTM_01</option>
          </select>
          <p>
            The selected agaent policy will collect data for <strong>2</strong>{" "}
            integrations:
          </p>
          <div className="d-flex gap-1">
            <div>
              <Button className="p-1" style={{ backgroundColor: "#4a5757" }}>
                <i className="bx bx-pulse"></i>System
              </Button>
            </div>
            <div>
              <Button className="p-1" style={{ backgroundColor: "#4a5757" }}>
                <i className="bx bxl-kubernetes"></i>Elastic Synthetics
              </Button>
            </div>
          </div>
          <div style={{ color: "#Ed8b00", cursor: "pointer" }} className="mt-4">
            <i className="bx bx-chevron-right"></i>
            Authentication settings
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "balck",
            border: "1px solid transparent",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  gray",
            display: "none",
          }}
          iconStyle={{ background: "white", color: "black" }}
          icon={<p className="fs-3 mx-3">2</p>}
        >
          <h5 className="vertical-timeline-element-title">Enroll in Fleet?</h5>
          <div>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                style={{
                  transform: "scale(1.5)",
                  marginRight: "5px",
                  backgroundColor:
                    selectedOption === "option1" ? "#Ed8b00" : "white",
                  border: "2px solid black",
                }}
              />
              <b>Enroll in Fleet (recommended) - </b> Enroll in Elastic Agent in
              Fleet to automatically deploy updates and centrally manage the
              agent.
            </label>

            <br />

            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                style={{
                  transform: "scale(1.5)",
                  marginRight: "5px",
                  backgroundColor:
                    selectedOption === "option2" ? "#Ed8b00" : "white",
                  border: "2px solid black",
                }}
              />
              <b>Run standaline - </b> Run an Elastic Agent standalone to
              configure and update the agent manually on the host where the
              agent is installed.
            </label>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "balck",
            border: "1px solid transparent",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  gray",
            display: "none",
          }}
          iconStyle={{ background: "white", color: "black" }}
          icon={<p className="fs-3 mx-3">3</p>}
        >
          <h5 className="vertical-timeline-element-title">
            Install Elastic Agent on your host
          </h5>
          <p className="vertical-timeline-element-subtitle">
            Select the appropriate platofrom and run commands to install, enroll
            and start Elastic Agent. Reuse commands to set up agents on more
            than one host. For aarch 64, see our{" "}
            <span style={{ color: "#Ed8b00" }}>downloads page</span> additional
            guidance, see our{" "}
            <span style={{ color: "#Ed8b00" }}>installation docs</span>
          </p>

          <ButtonToolbar className="mt-3">
            <ButtonGroup className="me-2">
              <Button color="dark" style={{ backgroundColor: "#252c2c" }}>
                Linux Tar
              </Button>
              <Button color="dark" style={{ backgroundColor: "#2d3535" }}>
                Mac
              </Button>
              <Button color="dark" style={{ backgroundColor: "#2d3535" }}>
                Windows
              </Button>
              <Button color="dark" style={{ backgroundColor: "#2d3535" }}>
                RPM
              </Button>
              <Button color="dark" style={{ backgroundColor: "#2d3535" }}>
                DEB
              </Button>
              <Button color="dark" style={{ backgroundColor: "#2d3535" }}>
                Kubernetes
              </Button>
            </ButtonGroup>
          </ButtonToolbar>

          <div
            className="p-2 mt-2"
            style={{
              backgroundColor: "#414141",
              border: "1px solid #Ed8b00",
              borderRadius: "8px",
              color: "white",
            }}
          >
            <p>
              curl -o output-file.tar.gz -L -C - curl -o output-file.tar.gz -L
              -C - https://example.com/large-file.tar.gz
              https://example.com/large-file.tar.gz
              https://example.com/large-file.tar.gz
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "balck",
            border: "1px solid transparent",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  gray",
            display: "none",
          }}
          iconStyle={{ background: "white", color: "black" }}
          icon={<p className="fs-3 mx-3">4</p>}
        >
          <h5 className="vertical-timeline-element-title">
            Confirm agent enrollment
          </h5>

          <UncontrolledAlert color="success" className="alert-top-border">
            <i className="ri-notification-off-line me-3 align-middle fs-16 text-success"></i>
            <strong>
              <Spinner size={"sm"} />
            </strong>{" "}
            Listening for agent ..
          </UncontrolledAlert>

          <p>
            After tha agent start up, the Elastic Stack listens for the agent
            and confirm the enrollment in Fleet. If you're having trouble
            connecting, check out the{" "}
            <span style={{ color: "#Ed8b00" }}>troubleshooting guide.</span>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default AddAgent;
