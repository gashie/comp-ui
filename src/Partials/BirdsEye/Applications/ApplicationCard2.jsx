import React, { useState } from "react";
import img from "./contours.png";
import { Button } from "reactstrap";
import { Tooltip } from "reactstrap";
import { Link } from "react-router-dom";

function ApplicationCard2({ name }) {
  const cardStyle = {
    width: "18rem",
    backgroundImage: `url(${img})`, // Replace 'img' with the actual import path of your background image
    backgroundSize: "cover",
    height: "auto",
  };

  const [settings, setSettings] = useState(false);
  const settingTool = () => setSettings(!settings);

  const [fork, setFork] = useState(false);
  const forkTool = () => setFork(!fork);

  const [monitor, setMonitor] = useState(false);
  const monitorTool = () => setMonitor(!monitor);

  const args = {
    autohide: true,
    flip: true,
  };

  return (
    <>
      <div className="col-12">
        <div className="card" style={cardStyle}>
          <div className="text-center p-4">
            <i
              className="bi-layers-fill fs-1 p-2 px-3"
              style={{
                background:
                  "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
                borderRadius: "10px",
                color: "white",
              }}
            ></i>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <div className="hstack justify-content-center mt-3">
              <p
                className="card-text text-center text-muted p-1 px-2"
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#e0e0e0",
                  width: "max-content",
                  borderRadius: "10px",
                }}
              >
                <i className="bi-gear mx-1 text-dark"></i>admin/applications
              </p>
            </div>
            <div className="mt-4 text-center hstack justify-content-center ">
              <p
                style={{
                  fontSize: "0.8rem",

                  width: "max-content",
                  borderRadius: "10px",
                }}
              >
                No Production Deployment
              </p>
            </div>
            <div className=" text-center hstack justify-content-center ">
              <p
                style={{
                  fontSize: "0.8rem",

                  width: "max-content",
                  borderRadius: "10px",
                }}
              >
                {" "}
                41d ago on <i className="bi-gear"></i>/applications
              </p>
            </div>

            <div className=" text-center hstack justify-content-center ">
              <p
                style={{
                  fontSize: "0.8rem",

                  width: "max-content",
                  borderRadius: "10px",
                }}
              >
                {" "}
                {/* <Button
                  className="btn btn-dark m-1"
                  style={{ fontSize: "0.5rem" }}
                  id="monitorbutton"
                >
                  <i
                    className="fa fa-compass"
                    style={{ color: "white", fontSize: "0.8rem" }}
                  ></i>
                   <Tooltip
                    {...args}
                    isOpen={fork}
                    target="forkbutton"
                    toggle={forkTool}
                  >
                    View Deployment
                  </Tooltip>
                </Button> */}
                <Link to="/app/application-details">
                <Button
                  className="btn btn-dark m-1"
                  style={{ fontSize: "0.5rem" }}
                  id="forkbutton"
                >
                  <i
                    className="fa fa-code-fork"
                    style={{ color: "white", fontSize: "0.8rem" }}
                  ></i>
                    <Tooltip
                    {...args}
                    isOpen={fork}
                    target="forkbutton"
                    toggle={forkTool}
                  >
                    View Deployment
                  </Tooltip>
                </Button></Link>
             
                {/* <Button
                  className="btn btn-dark m-1"
                  style={{ fontSize: "0.5rem" }}
                  id="settingbutton"
                >
                  <i
                    className="fa fa-cog"
                    style={{ color: "white", fontSize: "0.8rem" }}
                  ></i>
                  <Tooltip
                    {...args}
                    isOpen={settings}
                    target="settingbutton"
                    toggle={settingTool}
                  >
                    Manage Deployment Settings
                  </Tooltip>
                </Button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationCard2;
