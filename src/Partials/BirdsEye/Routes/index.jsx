import { useState } from "react";
// import { useSelector } from "react-redux";
//import { Form } from "reactstrap";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
  Container,
  Input,
  FormFeedback,
} from "reactstrap";
import DataTable from "../../../Common/DataTable/DataTable";
import "./index.css";
import img from "../../../assets/images/img.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addNewRoutes } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };
  const [isPermission, setIsPermission] = useState(false);
  const togglePermissionCanvas = () => {
    setIsPermission(!isPermission);
  };

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      // img: (contact && contact.img) || '',
      routes_path: "",
      routes_method: "POST",
      controller_function: "",
      middleware: "",
      permission_id: null,
    },
    validationSchema: Yup.object({
      routes_path: Yup.string().required(
        "Please provide route path eg. /create-users"
      ),

      controller_function: Yup.string().required(
        "Please provide route path eg. protect,CreateUser"
      ),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        validation.resetForm();
      } else {
        // save new Contact
        dispatch(addNewRoutes(values));
        validation.resetForm();
      }
      toggleRightCanvas();
    },
  });

  const columns = [
    {
      Header: "ROUTE PATH",
      accessor: "name", // Replace with the actual accessor for your data
      Cell: ({ value }) => <span style={{ color: "black" }}>{value}</span>,
    },
    {
      Header: "ROUTE METHOD",
      accessor: "namse",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "CONTROLLER FUNCTION",
      accessor: "",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "MIDDLEWARE",
      accessor: "2",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },
    {
      Header: "PERMISSION",
      accessor: "3",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <div className="form-check form-switch card-toggle-two">
            <input
              className="form-check-input toggles"
              type="checkbox"
              role="switch"
              id="card-toggle-two"
            />
          </div>
        </span>
      ),
    },

    // Add more columns as needed
  ];

  // Sample data
  const data = [];

  return (
    <div className="px-4 py-3 page-body">
      <div
        className="card mb-3"
        style={{
          background: "c",
          color: "white",
        }}
      >
        <div
          className="card-body text-light"
          style={{
            background:
              "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
            color: "white",
          }}
        >
          <div className="row g-4 li_animate">
            <div className="col-xl-12 col-lg-12 col-md-12 col">
              <div className="row g-4 li_animate">
                <div className="col-xl-8 col-lg-8">
                  <h2 className="fw-bold mb-xl-2">Create System Routes</h2>
                  <p
                    className="fw-lighter text-light w-100"
                    style={{ fontSize: "0.8em" }}
                  >
                    Agent policies are used to manage settings across a group of
                    agents. You can add integrations to your agent policy to
                    specify what your agents collect. When you edit an agent
                    policy, you can use Fleet to deploy updates to a specified
                    group of agents.
                  </p>

                  <Button
                    style={{
                      border: "1px solid transparent",
                      fontSize: "0.8rem",
                      backgroundColor: "white",
                      color: "#Ed8b00",
                    }}
                    onClick={() => {
                      setIsRight(true);
                    }}
                  >
                    <i className="bi-plus"></i>Create Route
                  </Button>
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

              <Offcanvas
                isOpen={isRight}
                toggle={toggleRightCanvas}
                id="offcanvasRight"
                direction="end"
                style={{ color: "black", backgroundColor: "white" }}
                className="py-5"
              >
                <OffcanvasHeader
                  toggle={toggleRightCanvas}
                  id="offcanvasRightLabel"
                >
                  <h3>Create System Route</h3>
                </OffcanvasHeader>
                <OffcanvasBody>
                  <div>
                    <p
                      className="fw-lighter text-muted"
                      style={{ fontSize: "0.8em" }}
                    >
                      Agent policies are used to manage settings acroos a group
                      of agents You can dd integrations to your agent policy to
                      sepcify what your agents collect. When you edit an agent
                      policy, you can use Fleet to deploy updates to be a
                      specified group of agents.
                    </p>
                    <hr />

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="row">
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">Route Path</label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Input
                              type="text"
                              name="routes_path"
                              id="routes_path"
                              className="form-control p-3"
                              placeholder="eg. /create-users"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.routes_path || ""}
                              invalid={
                                validation.touched.routes_path &&
                                validation.errors.routes_path
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.routes_path &&
                            validation.errors.routes_path ? (
                              <FormFeedback type="invalid">
                                {validation.errors.routes_path}
                              </FormFeedback>
                            ) : null}
                          </fieldset>
                        </div>
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">
                            Routes Method
                          </label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <input
                              type="text"
                              className="form-control p-3"
                              placeholder="eg. /create-users"
                              value="POST"
                              disabled={true}
                            />
                          </fieldset>
                        </div>
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">
                            Controller Function
                          </label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Input
                              type="text"
                              name="controller_function"
                              id="controller_function"
                              className="form-control p-3"
                              placeholder="eg. protect,CreateUser"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={
                                validation.values.controller_function || ""
                              }
                              invalid={
                                validation.touched.controller_function &&
                                validation.errors.controller_function
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.controller_function &&
                            validation.errors.controller_function ? (
                              <FormFeedback type="invalid">
                                {validation.errors.controller_function}
                              </FormFeedback>
                            ) : null}
                          </fieldset>
                        </div>
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">
                            Permission ID
                          </label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <input
                              type="text"
                              className="form-control p-3"
                              placeholder="eg. protect,CreateUser"
                            />
                          </fieldset>
                        </div>
                        {/* <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">Description</label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <input type="text" className="form-control" />
                            <div className="form-icon position-absolute">
                              <i className="bi-list"></i>
                            </div>
                          </fieldset>
                        </div> */}

                        <div className="col-12">
                          <button
                            type="submit"
                            className="me-1 btn text-light"
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
                              border: "none",
                            }}
                          >
                            <i className="bi-plus"></i> Add
                          </button>
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => {
                              setIsRight(false);
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </OffcanvasBody>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row g-4 li_animate">
            <div className="col-xl-12 col-lg-12">
              <DataTable
                columns={columns}
                data={data}
                useGlobalFilter={true}
                length={data?.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
