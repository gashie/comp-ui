import {
  Button,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import TableComponent from "../../../../../Common/DataTable/TableComponent2";
import { useState } from "react";

function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const data = [
    {
      id: "1",
      name: "CalPay-DR-Server (4c6934_232_q22)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
    {
      id: "2",
      name: "Default(4c6934_232_q22_2as23_2323s)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
    {
      id: "3",
      name: "HQ-Without-GTM (7aa2332-23asa-2aas23)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
    {
      id: "4",
      name: "DR-Enroll (eabsa2-as23as-sa2323-asas-as2323)",
      secret: "",
      agentPolicy: "CAL-DR-Docker-CalPayDMZ",
      createdOn: "Nov 09, 2023",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => <p style={{ color: "#Ed8b00" }}>{row.name}t</p>,
      sortable: true,
    },

    {
      name: "Secret",
      selector: (row) => (
        <>
          <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#Ed8b00" }}>{row.secret}</p>
            <p>{row.rev}</p>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Agent policy",
      selector: (row) => row.agentPolicy,
      sortable: true,
      center: true,
    },
    {
      name: "Created on",
      selector: (row) => row.createdOn,
      sortable: true,
      right: true,
    },
    {
      name: "Active",
      selector: (row) => (
        <>
          <i
            className="bx bx-radio-circle-marked"
            style={{ color: "#Ed8b00" }}
          ></i>
        </>
      ),
      sortable: true,
      center: true,
    },

    {
      name: "Actions",
      selector: (row) => row.runtime,
      sortable: true,
      center: true,
      cell: () => (
        <div className="App">
          <div className="openbtn text-center">
            <button
              type="button"
              className="btn fs-3 mt-3"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
              style={{
                backgroundColor: "",
                color: "white",
                border: "none",
              }}
            >
              <i className="bx bx-trash" style={{ color: "red" }}></i>
            </button>
          </div>
        </div>
      ),
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="p-2" style={{backgroundColor: 'white'}}>
        {" "}
        <div
          className="d-flex p-2"
          style={{
            justifyContent: "space-between",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <div></div>
          <div className="d-flex gap-1">
            <div>
              <Button
               
                className="btn"
                style={{
                  border: "1px solid #Ed8b00",
                 
                  backgroundColor: "white",
                  color: "#Ed8b00",
                }}
                onClick={() => {
                  toggleModal();
                }}
              >
                <i className="bx bx-plus mx-1"></i>
                Create enrollment tokens
              </Button>
            </div>
          </div>
        </div>
        <TableComponent data={data} columns={columns}></TableComponent>
        {/* Modal */}
        <div>
          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader
              toggle={toggleModal}
              style={{ backgroundColor: "white", color: "black", borderRadius: '0px', border: '1px solid transparent' }}
            >
              Create enrollment token
            </ModalHeader>
            <ModalBody style={{ backgroundColor: "white", color: "black" }}>
              <Row>
                <Col>
                  <label>Token Name</label>
                  <Input
                    className="form-control p-3 custom-Input"
                    type="text"
                    placeholder={"Enter a token name"}
                    style={{
                      border: "2px solid #Ed8b00", // #Ed8b00 border
                      // backgroundColor: "black", // Black background
                      color: "gray", // Gray text color
                      "::placeholder": {
                        color: "gray !important", // Change the color of the placeholder
                      },
                    }}
                  ></Input>
                </Col>
                <p>Token id will be used when this is left empty.</p>
              </Row>

              <Row>
                <Col className="mt-3">
                  <label>Policy</label>
                  <select
                    className="form-control mt-2 p-3"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    style={{
                      border: "2px solid #Ed8b00",
                      // backgroundColor: "#080a0a",
                      color: "gray",
                      outline: "none",
                    }}
                  >
                    <option value="option1">Fefault (currently Default)</option>
                  </select>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter style={{ backgroundColor: "white",  border: '1px solid transparent' }}>
              <Button
                onClick={toggleModal}
                className="btn"
                style={{
                  border: "1px solid #Ed8b00",
                 
                  backgroundColor: "white",
                  color: "#Ed8b00",
                }}
              >
                Create enrollment token
              </Button>{" "}
              <Button color="dark" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Index;
