import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Col,
  Row,
  UncontrolledAccordion,
} from "reactstrap";
import { FaDesktop } from "react-icons/fa";
import "./accordion.css";

function Accordion() {
  return (
    <>
      <UncontrolledAccordion
        defaultOpen={["1", "2"]}
        stayOpen
        style={{ border: "1px solid transparent", borderRadius: "10px" }}
        className="w-100 p-3"
      >
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="1">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              1.
            </span>{" "} */}
            AWS - nmdev
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <div className="d-flex gap-4">
              <div>
                {" "}
                <div
                  className="circle circle-outer"
                  style={{ border: "4px solid #00d084" }}
                >
                 <FaDesktop />
                </div>
              </div>
              <div>
                <table>
                  <tr>
                    <td>
                      <p className="fw-bolder">
                        <b>IP:</b>
                      </p>
                    </td>
                    <td>
                      <p>0.0.0.0</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">
                        <b>Host:</b>
                      </p>
                    </td>
                    <td>
                      <p className="mx-2"> AWS - nmdev</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">
                        <b>Role:</b>
                      </p>
                    </td>
                    <td>
                      <p>Cloud Portal</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">
                        <b>Brand:</b>
                      </p>
                    </td>
                    <td>
                      <p className="mx-2">AWS</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="2">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              2.
            </span>{" "} */}
            Performance Monitors - 2
          </AccordionHeader>
          <AccordionBody accordionId="2">
            Performance monitors content
          </AccordionBody>
        </AccordionItem>

        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="4" className="fw-bolder">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              4.
            </span>{" "} */}
            Credentials - 1
          </AccordionHeader>
          <AccordionBody accordionId="4">Credentials Content</AccordionBody>
        </AccordionItem>
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="5" className="fw-bolder">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              5.
            </span>{" "} */}
            Cloud - Portal{" "}
          </AccordionHeader>
          <AccordionBody accordionId="5">Cloud Portal Content</AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </>
  );
}

export default Accordion;
