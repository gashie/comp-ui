import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaDesktop } from "react-icons/fa";
import "./atom.css";
import Accord from "../Accordion";

const AtomComponent = () => {
  // Function to generate PC icons
  const generatePCIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<FaDesktop key={i} />);
    }
    return icons;
  };

  return (
    <div className="p-5 d-flex justify-content-between ">
      <div className="text-start w-50 d-flex mt-5">
        <Row className="justify-content-center">
          {/* Outer circle */}
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}} >{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #fe3912'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #fe3912'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Outer circle */}
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #fe3912'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Outer circle */}
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #fe3912'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #fe3912'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
          <Col className="text-center">
            <div className="circle circle-outer" style={{border: '4px solid #00d084'}}>{generatePCIcons(1)}</div>
          </Col>
        </Row>
      </div>

      <div className="w-50 mx-5">
        <div className="text-start">
            <Accord />
        </div>
      </div>
    </div>
  );
};

export default AtomComponent;
