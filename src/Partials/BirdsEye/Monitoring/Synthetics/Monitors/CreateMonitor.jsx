import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoWifi } from "react-icons/io5";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Spinner,
  UncontrolledAlert,
} from "reactstrap";
import HTTP from "./HTTP";
import Tcp from "./TCP";
import Icmp from "./ICMP";
import AdvancedOptions from "./AdvancedOptions";

function CreateMonitor() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [toggle, setToggle] = useState("http");

  return (
    <>
      <div>
        <VerticalTimeline
          layout="1-column-left"
          lineColor="gray"
          animate="true"
        >
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
            <h5 className="vertical-timeline-element-title fw-bolder">
              Select a monitor type
            </h5>
            <h6 className="vertical-timeline-element-subtitle mt-3">
              Choose a monitor that best first your use case
            </h6>

            <div className="d-flex gap-2 align-items-center mt-5">
              <div
                className="p-3 px-4"
                style={{
                  backgroundColor: toggle === "http" && "#ffbe0b",
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "1px solid #e5e6ec",
                }}
                onClick={() => {
                  setToggle("http");
                }}
              >
                <div className="text-center">
                  <IoWifi />
                </div>
                <div className="text-center mt-4">HTTP Ping</div>
              </div>

              <div
                className="p-3 px-4"
                style={{
                  backgroundColor: toggle === "tcp" && "#ffbe0b",
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "1px solid #e5e6ec",
                }}
                onClick={() => {
                  setToggle("tcp");
                }}
              >
                <div className="text-center">
                  <IoWifi />
                </div>
                <div className="text-center mt-4">TCP Ping</div>
              </div>
              <div
                className="p-3 px-4"
                style={{
                  backgroundColor: toggle === "icmp" && "#ffbe0b",
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "1px solid #e5e6ec",
                }}
                onClick={() => {
                  setToggle("icmp");
                }}
              >
                <div className="text-center">
                  <IoWifi />
                </div>
                <div className="text-center mt-4">ICMP Ping</div>
              </div>
            </div>

            <div
              className="mt-5 p-3"
              style={{
                backgroundColor: "#ffbe0b",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <p className="fw-bolder">ICMP Ping</p>
              <p>
                A lightweight API check to validate the availability of a web
                service or endpoint.
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
            icon={<p className="fs-3 mx-3">2</p>}
          >
            <h5 className="vertical-timeline-element-title fw-bolder">
              Monitor details
            </h5>
            <div>
              {toggle === "http" ? (
                <HTTP />
              ) : toggle === "icmp" ? (
                <Icmp />
              ) : toggle === "tcp" ? (
                <Tcp />
              ) : (
                <HTTP />
              )}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <div className="mt-4">
          <AdvancedOptions />
        </div>
      </div>
    </>
  );
}

export default CreateMonitor;
