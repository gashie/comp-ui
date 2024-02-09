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
  Input,
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
      <div className="p-4">
        <div className="mt-5">
          <label className="fw-bolder">Location Name:</label>
          <Input className="p-3"></Input>
        </div>
        <div className="mt-4">
          <label className="fw-bolder">Select Policy ID</label>
          <select
            className="form-control mt-2 p-3"
            value={selectedOption}
            onChange={handleSelectChange}
            style={{
              border: "1px solid #Ed8b00",
              // backgroundColor: "#080a0a",
              color: "gray",
              outline: "none",
            }}
          >
            <option value="option1">POLICY_ID_01</option>
            <option value="option2">POLICY_ID_01</option>
            <option value="option3">POLICY_ID_01</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default AddAgent;
