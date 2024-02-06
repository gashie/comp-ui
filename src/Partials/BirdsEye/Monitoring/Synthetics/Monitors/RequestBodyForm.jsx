import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  NavItem,
  NavLink,
  Nav,
  TabPane,
  TabContent,
} from "reactstrap";
import classnames from "classnames";

const PostmanForm = () => {
  const [formData, setFormData] = useState({
    key1: "",
    key2: "",
    jsonData: "", // New field for JSON data
    textData: "", // New field for JSON data
    xmlData: "", // New field for XML data
    formData: "", // New field for Form data
  });

  const [selectedMode, setSelectedMode] = useState("text");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  const renderModeSpecificField = () => {
    switch (selectedMode) {
      case "json":
        return (
          <FormGroup>
            <Label for="jsonData">JSON Data:</Label>
            <Input
              type="textarea"
              name="jsonData"
              id="jsonData"
              value={formData.jsonData}
              onChange={handleInputChange}
            />
          </FormGroup>
        );
      case "text":
        return (
          <FormGroup>
            <Label for="jsonData">Text Data:</Label>
            <Input
              type="textarea"
              name="textData"
              id="textData"
              value={formData.textData}
              onChange={handleInputChange}
            />
          </FormGroup>
        );
      case "xml":
        return (
          <FormGroup>
            <Label for="xmlData">XML Data:</Label>
            <Input
              type="textarea"
              name="xmlData"
              id="xmlData"
              value={formData.xmlData}
              onChange={handleInputChange}
            />
          </FormGroup>
        );
      case "form":
        return (
          <FormGroup>
            <Label for="formData">Form Data:</Label>
            <Input
              type="textarea"
              name="formData"
              id="formData"
              value={formData.formData}
              onChange={handleInputChange}
            />
          </FormGroup>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Mode:", selectedMode);
    console.log("API request with:", formData);
  };

  const [activeTab, setActiveTab] = useState("locations");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
     <Label for="modeDropdown" className="fw-bolder mt-4 mb-4">
            Request Body:
          </Label>
      <Form onSubmit={handleSubmit}>
        <div>
          <Nav tabs style={{ borderBottom: "black" }}>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "text" })}
                onClick={() => toggleTab("text")}
              >
                <i className="bx bx-home mx-1"></i>
                Text
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "json" })}
                onClick={() => toggleTab("json")}
              >
                <i className="bx bx-network-chart mx-1"></i>
                JSON
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "xml" })}
                onClick={() => toggleTab("xml")}
              >
                <i className="bx bx-server mx-1"></i>
                XML
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "form" })}
                onClick={() => toggleTab("form")}
              >
                <i className="bx bx-server mx-1"></i>
                Form
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
            <TabPane tabId="text">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Input
                      className="mt-3"
                      type="textarea"
                      name="textData"
                      id="textData"
                      value={formData.textData}
                      onChange={handleInputChange}
                      style={{height: '200px'}}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="json">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Input
                      className="mt-3"
                      type="textarea"
                      name="jsonData"
                      id="jsonData"
                      value={formData.jsonData}
                      onChange={handleInputChange}
                      style={{height: '200px'}}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="form">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Input
                      className="mt-3"
                      type="textarea"
                      name="formData"
                      id="formData"
                      value={formData.formData}
                      onChange={handleInputChange}
                      style={{height: '200px'}}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="xml">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Input
                      className="mt-3"
                      type="textarea"
                      name="xmlData"
                      id="xmlData"
                      value={formData.xmlData}
                      onChange={handleInputChange}
                     style={{height: '200px'}}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>

        {/* <FormGroup>
          <Label for="modeDropdown" className="fw-bolder mt-4">
            Request Body:
          </Label>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              caret
              style={{ backgroundColor: "#ffb23a", border: "none" }}
              className="p-2 px-5"
            >
              {selectedMode.toLowerCase()}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleModeChange("text")}>
                Text
              </DropdownItem>
              <DropdownItem onClick={() => handleModeChange("json")}>
                JSON
              </DropdownItem>
              <DropdownItem onClick={() => handleModeChange("xml")}>
                XML
              </DropdownItem>
              <DropdownItem onClick={() => handleModeChange("form")}>
                Form
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        {renderModeSpecificField()} */}
        <Button color="primary" type="submit">
          Send Request
        </Button>
      </Form>
    </>
  );
};

export default PostmanForm;
