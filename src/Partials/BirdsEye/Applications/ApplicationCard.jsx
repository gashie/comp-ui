import React from "react";
import img from "./contours.png";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function ApplicationCard({ name, src, des, link }) {
  const cardStyle = {
    width: "18rem",
    backgroundImage: `url(${img})`, // Replace 'img' with the actual import path of your background image
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="col-12">
        <div className="card" style={cardStyle}>
          <div className="text-center p-4">
            <i
              className={`fa ${src} fs-3 p-3 px-3`}
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
            <p
              className="card-text text-center text-muted"
              style={{ fontSize: "0.8rem" }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-center">
              <Link to={"/" + link}>
                <Button
                  className="btn btn-dark"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
                    color: "white",
                    border: "none",
                  }}
                >
                  Setup Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationCard;
