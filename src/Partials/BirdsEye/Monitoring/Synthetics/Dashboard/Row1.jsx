import React from "react";
import { Input, InputGroup, InputGroupText, Button } from "reactstrap";
import { IoFilter } from "react-icons/io5";


function Row1() {
  return (
    <>
      <div>
        <div className="mt-3">
          <h4>Overview</h4>
        </div>
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
      </div>
    </>
  );
}

export default Row1;
