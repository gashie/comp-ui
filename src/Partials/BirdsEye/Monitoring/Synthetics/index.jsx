import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
// import Agents from "./Agent/Agents";
// import AgentPolices from "./AgentPolicy/index";
// import EnrollmentTokens from "./EnrollmentTokens/index";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/img.png";
import Locations from "./Locations";
import Monitors from './Monitors'
import Alerts from './Alerts'
import TLS from './TLSCerts'
import Dashboard from './Dashboard'

function Index() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Col md={12} xl={12} style={{}} className="mt-5">
        <div
          className="card mb-3 mx-2"
          style={{
            background:
              "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
            color: "white",
            border: 'none'
          }}
        >
          <div className="card-body">
            <div className="row g-4 li_animate">
              <div className="col-xl-8 col-lg-8">
                <h2 className="fw-bold mb-xl-2">Synthetics</h2>
                <p
                  className="fw-lighter text-light w-100"
                  style={{ fontSize: "1rem",border: 'none' }}
                >
                  Agent policies are used to manage settings across a group of
                  agents. You can add integrations to your agent policy to
                  specify what your agents collect. When you edit an agent
                  policy, you can use Fleet to deploy updates to a specified
                  group of agents.
                </p>
                <Link to="/app/configure-applications">
                  {/* <Button style={{backgroundColor: 'white', color: 'orange', border: 'none'}} className="btn btn-light">
                <i className="bi-plus"></i> Add Application
              </Button> */}
                </Link>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex justify-content-end">
                <img
                  src={img}
                  alt="Your Image"
                  className="img-fluid"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <Nav tabs style={{ borderBottom: "black" }}>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "dashboard" })}
                  onClick={() => toggleTab("dashboard")}
                >
                  <i className="bx bx-home mx-1"></i>
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "locations" })}
                  onClick={() => toggleTab("locations")}
                >
                  <i className="bx bx-home mx-1"></i>
                  Locations
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "monitors" })}
                  onClick={() => toggleTab("monitors")}
                >
                  <i className="bx bx-network-chart mx-1"></i>
                  Monitors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "alerts" })}
                  onClick={() => toggleTab("alerts")}
                >
                  <i className="bx bx-server mx-1"></i>
                  Alerts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tls" })}
                  onClick={() => toggleTab("tls")}
                >
                  <i className="bx bx-server mx-1"></i>
                  TLS Certificates
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "tab4" })}
                  onClick={() => toggleTab("tab4")}
                >
                  <i className="bx bxl-kubernetes mx-1"></i>
                  Data streams
                </NavLink>
              </NavItem> */}
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="dashboard">
                <Row>
                  <Col sm="12">
                    <Dashboard />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="locations">
                <Row>
                  <Col sm="12">
                    <Locations />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="monitors">
                <Row>
                  <Col sm="12">
                    <Monitors />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tab3">
                <Row>
                  <Col sm="12">{/* <EnrollmentTokens /> */}</Col>
                </Row>
              </TabPane>
              <TabPane tabId="alerts">
                <Row>
                  <Col sm="12">
                   <Alerts />
                    {/* Add your content for Tab 3 here */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tls">
                <Row>
                  <Col sm="12">
                  <TLS />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Index;
