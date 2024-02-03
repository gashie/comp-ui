import { Col } from "reactstrap";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Button,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
//import SpikeCircularProgressBar from "../../components/Charts/SpikeCircularProgressBar";
//import SpeedometerComponent from "../../components/Charts/Speedometer";
import HomePage from "../HomePage";
import Fleet from "../Fleet";
import Functions from "../Functions";
import Synthetics from "../Synthetics";

function Index() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="page-body w-100">
        <div
          className=" "
          style={{
          
            color: "white",
           
          }}
        >
          <div
            className="card-body text-light"
           
        
          >
            {/* <div className="row g-4 li_animate">
              <div className="col-xl-12 col-lg-12 col-md-12 col">
                <div className="row g-4 li_animate">
                  <div className="col-xl-8 col-lg-8">
                    <h2 className="fw-bold mb-xl-2">Roles & Permissions</h2>
                    <p
                      className="fw-lighter text-light w-100"
                      style={{ fontSize: "0.8em" }}
                    >
                      Agent policies are used to manage settings across a group
                      of agents. You can add integrations to your agent policy
                      to specify what your agents collect. When you edit an
                      agent policy, you can use Fleet to deploy updates to a
                      specified group of agents.
                    </p>

                    <Button
                      style={{
                        border: "1px solid transparent",
                        fontSize: "0.8rem",
                        backgroundColor: "white",
                        color: "#Ed8b00",
                      }}
                    >
                      <i className="bi-plus"></i>Add Role
                    </Button>
                  </div>
                  <div className="col-xl-4 col-lg-4 d-flex justify-content-end">
                  
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className=" " >
          <div className="card-body">
            <div className="row li_animate">
              <div className="col-xl-12 col-lg-12" style={{ backgroundColor: "#1d2222", overflow: "hidden"}}>
                <Col style={{ backgroundColor: "#1d2222" }}>
                  <div className="">
                    <div>
                      <Nav tabs style={{ borderBottom: "white" }}>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab1",
                            })}
                            onClick={() => toggleTab("tab1")}
                          >
                            <i className="bx bx-home mx-1"></i>
                            Home
                          </NavLink>
                        </NavItem>
                        {/* <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab2",
                            })}
                            onClick={() => toggleTab("tab2")}
                          >
                            <i className="bx bx-network-chart mx-1"></i>
                            Overview
                          </NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab3",
                            })}
                            onClick={() => toggleTab("tab3")}
                          >
                            <i className="bx bx-server mx-1"></i>
                            Nodes
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab4",
                            })}
                            onClick={() => toggleTab("tab4")}
                          >
                            <i className="bx bxl-kubernetes mx-1"></i>
                            Kubernetes
                          </NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab5",
                            })}
                            onClick={() => toggleTab("tab5")}
                          >
                            <i className="bx bx-tachometer mx-1"></i>
                            Dashboards
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab6",
                            })}
                            onClick={() => toggleTab("tab6")}
                          >
                            <i className="bx bx-bell mx-1"></i>
                            Alerts
                          </NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab7",
                            })}
                            onClick={() => toggleTab("tab7")}
                          >
                            <i className="bx bx-search-alt mx-1"></i>
                            Anomalies
                          </NavLink>
                        </NavItem> */}
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab8",
                            })}
                            onClick={() => toggleTab("tab8")}
                          >
                            <i className="bx bx-analyse mx-1"></i>
                            Functions
                          </NavLink>
                        </NavItem>
                        {/* <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab9",
                            })}
                            onClick={() => toggleTab("tab9")}
                          >
                            <i className="bx bx-message-square-detail mx-1"></i>
                            Events
                          </NavLink>
                        </NavItem> */}
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "tab10",
                            })}
                            onClick={() => toggleTab("tab10")}
                          >
                            <i className="bx bx-message-square-detail mx-1"></i>
                            Fleet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "synthetics",
                            })}
                            onClick={() => toggleTab("synthetics")}
                          >
                            <i className="bx bx-message-square-detail mx-1"></i>
                            Synthetics
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="tab1">
                          <Row>
                            <Col>
                            
                              <HomePage />
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            <Col sm="12">
                              <h4>Over view</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Row>
                            <Col sm="12">
                              <h4>Nodes</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab4">
                          <Row>
                            <Col sm="12">
                              <h4>Kubernetes</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab5">
                          <Row>
                            <Col sm="12">
                              <h4>Dashboards</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab6">
                          <Row>
                            <Col sm="12">
                              <h4>Alerts</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab7">
                          <Row>
                            <Col sm="12">
                              <h4>Anomalies</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab8">
                          <Row>
                            <Col sm="12">
                              <Functions />
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab9">
                          <Row>
                            <Col sm="12">
                              <h4>Events</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab10">
                          <Row>
                            <Col sm="12">
                              <Fleet />
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="synthetics">
                          <Row>
                            <Col sm="12">
                              <Synthetics />
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
