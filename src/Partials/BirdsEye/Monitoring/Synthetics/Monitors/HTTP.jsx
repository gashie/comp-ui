import React, { useState } from "react";
import Switch from "../../../../../components/Common/SwitchToggle";

function HTTP() {
  const [selectedOption, setSelectedOption] = useState("Accra");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <div className="mt-3">
          <h6>URL</h6>
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
          <p className="text-muted">For example, your servvice endpoint.</p>
        </div>
        <div className="mt-3">
          <h6>Monitor name</h6>
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
            Choose a name to help identify this monitor in the future.
          </p>
        </div>
        <div className="mt-3">
          <h6>Locations</h6>
          <div>
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
              <option value="option1">Accra</option>
              <option value="option2">Tema</option>
              <option value="option3">Kumasi</option>
            </select>
          </div>
          <p className="text-muted">
            Where do you want to run this test from ? Additional locations will increase yout total cost.
          </p>
        </div>
        <div className="mt-3">
          <h6>Frequency</h6>
          <div>
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
              <option value="option1">Every 3 minutes</option>
             
            </select>
          </div>
          <p className="text-muted">
            How often do you want to run this test? Hugher frquencies will increase your total cost.
          </p>
        </div>
        <div className="mt-3">
          <h6>Max redirects</h6>
          <div>
            <input
              className="form-control"
              type="text"
               
              style={{
                border: "1px solid #Ed8b00 ",
                backgroundColor: "white",
                color: "gray",
              }}
            ></input>
          </div>
          <p className="text-muted">The total number of redirects to follow.</p>
        </div>
        <div className="mt-3">
          <h6>Timeout in seconds</h6>
          <div>
            <input
              className="form-control"
              type="text"
               
              style={{
                border: "1px solid #Ed8b00 ",
                backgroundColor: "white",
                color: "gray",
              }}
            ></input>
          </div>
          <p className="text-muted">The total time allowed for testing the connection and exchanging data.</p>
        </div>


        <div className="mt-5">
            <div className="d-flex align-items-center">
                <Switch /> <div className="mx-3">Enable Monitor</div>
            </div>
            <div className="text-muted">When disabled, the monitor doesn't run any tests. You can enable it at any time.</div>
            <div className="d-flex align-items-center mt-3">
                <Switch /> <div className="mx-3">Disable status alerts on this monitor.</div>
            </div>
           
            <div className="d-flex align-items-center mt-3">
                <Switch /> <div className="mx-3">Disable TLS alerts on this monitor.</div>
            </div>
           
        </div>
      </div>
    </>
  );
}

export default HTTP;
