import { useEffect, useState } from "react";
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
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewPermissions,
  addNewRoles,
  getPermissionsAction,
  getRolesAction,
} from "../../../store/actions";
import {
  handleValidDate,
  handleValidTime,
} from "../../../Common/Hooks/ValidDateTime";

const Index = () => {
  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };
  const [isPermission, setIsPermission] = useState(false);
  const togglePermissionCanvas = () => {
    setIsPermission(!isPermission);
  };

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const transformPermissionName = (input) => {
    // Replace spaces with underscores and convert to lowercase
    return input.replace(/\s+/g, "_").toLowerCase();
  };

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      // img: (contact && contact.img) || '',
      permission_name: "",
      description: "",
    },
    validationSchema: Yup.object({
      permission_name: Yup.string().required(
        "Please provide route name eg. Add New Users to Workspace"
      ),

      //description: Yup.string().required("Please provide description"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        validation.resetForm();
      } else {
        // save new Contact
        dispatch(
          addNewPermissions({
            ...values,
            permission_name: transformPermissionName(values.permission_name),
          })
        );
        validation.resetForm();
      }
      toggleRightCanvas();
    },
  });

  useEffect(() => {
    dispatch(getPermissionsAction());
    dispatch(getRolesAction());
  }, [dispatch]);

  const { loading, error, permissions, rolesLoading, roles } = useSelector((state) => ({
    loading: state.PermissionsReducer.loading,
    rolesLoading: state.RolesReducer.loading,
    error: state.PermissionsReducer.permissionserror,
    permissions: state.PermissionsReducer.permissions,
    roles: state.RolesReducer.roles,
  }));

  const columns = [
    {
      Header: "Roles",
      accessor: "role_name", // Replace with the actual accessor for your data
      Cell: ({ value }) => <span style={{ color: "black" }}>{value}</span>,
    },
    {
      Header: "Application Deployments",
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
      Header: "Setup Monitoring",
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
      Header: "Change Passwords",
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
      Header: "Setup Databases",
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
    {
      Header: "Manage Users",
      accessor: "5",
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


  const data = [
    { name: "System Admin", age: 30 },
    { name: "General User", age: 25 },
    { name: "Foreign User", age: 25 },
    { name: "Unsubscribed User", age: 25 },
    { name: "Gold Users", age: 25 },
    { name: "Silver Users", age: 25 },
    { name: "Bronze Users", age: 25 },
    { name: "Platimun Users", age: 25 },
    // Add more data as needed
  ];

  const options = [
    { label: "No", value: false },
    { label: "Yes", value: true },
  ];

  let adminOptions = options.map(function (item) {
    return { value: item.value, label: item.label };
  });

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
                  <h2 className="fw-bold mb-xl-2">
                    Assign Roles to Permissions
                  </h2>
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
                    <i className="bi-plus"></i>Add Permission
                  </Button>
                  {/* <Button
                    style={{
                      border: "1px solid transparent",
                      fontSize: "0.8rem",
                      backgroundColor: "white",
                      color: "#Ed8b00",
                    }}
                    onClick={() => {
                      setIsPermission(true);
                    }}
                    className="mx-2"
                  >
                    <i className="bi-plus"></i>Add Permission
                  </Button> */}
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
                  <h3>Create Permission</h3>
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
                          <label className="col-form-label">
                            Permission Name
                          </label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Input
                              type="text"
                              name="permission_name"
                              id="permission_name"
                              className="form-control p-3"
                              placeholder="eg.  Add New Users to Workspace"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.permission_name || ""}
                              invalid={
                                validation.touched.permission_name &&
                                validation.errors.permission_name
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.permission_name &&
                            validation.errors.permission_name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.permission_name}
                              </FormFeedback>
                            ) : null}
                          </fieldset>
                        </div>
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">Description</label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Input
                              type="text"
                              name="description"
                              id="description"
                              className="form-control p-3"
                              placeholder=""
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.description || ""}
                              invalid={
                                validation.touched.description &&
                                validation.errors.description
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.description &&
                            validation.errors.description ? (
                              <FormFeedback type="invalid">
                                {validation.errors.description}
                              </FormFeedback>
                            ) : null}
                          </fieldset>
                        </div>
                        {/* 
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">
                            Is this role for a general adminstrator?
                          </label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Select
                              name="is_system"
                              //   isLoading={onlyalertgrouploading}
                              value={adminOptions.find(function (e) {
                                return e.value === validation.values.is_system;
                              })}
                              onChange={(e) =>
                                validation.setFieldValue("is_system", e.value)
                              }
                              className="mb-0"
                              options={adminOptions}
                              id="taginput-choices"
                              key={validation.values.is_system}
                            ></Select>
                            {validation.touched.is_system &&
                            validation.errors.is_system ? (
                              <FormFeedback type="invalid">
                                {validation.errors.is_system}
                              </FormFeedback>
                            ) : null}
                          </fieldset>
                        </div> */}
                        {/* <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">Description</label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <input type="text" className="form-control" />
                            <div className="form-icon position-absolute">
                              <i className="bi-list"></i>
                            </div>
                          </fieldset>
                        </div> */}

                        <div className="col-12 mt-3">
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
                data={roles}
                useGlobalFilter={true}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Permission */}
      <Offcanvas
        isOpen={isPermission}
        toggle={togglePermissionCanvas}
        id="offcanvasRight"
        direction="end"
        style={{ color: "black", backgroundColor: "white" }}
        className="py-5"
      >
        <OffcanvasHeader toggle={toggleRightCanvas} id="offcanvasRightLabel">
          <h3>Add Permission</h3>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <p className="fw-lighter text-muted" style={{ fontSize: "0.8em" }}>
              Agent policies are used to manage settings acroos a group of
              agents You can dd integrations to your agent policy to sepcify
              what your agents collect. When you edit an agent policy, you can
              use Fleet to deploy updates to be a specified group of agents.
            </p>
            <hr />

            <form>
              <div className="row">
                <div className="mb-3 col-md-12 col-12">
                  <label className="col-form-label">Permission</label>
                  <fieldset className="form-icon-group left-icon position-relative">
                    <input type="text" className="form-control" />
                    <div className="form-icon position-absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </div>
                  </fieldset>
                </div>
                <div className="mb-3 col-md-12 col-12">
                  <label className="col-form-label">Description</label>
                  <fieldset className="form-icon-group left-icon position-relative">
                    <input type="text" className="form-control" />
                    <div className="form-icon position-absolute">
                      <i className="bi-list"></i>
                    </div>
                  </fieldset>
                </div>

                <div className="col-12">
                  <button
                    type="button"
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
                      setIsPermission(false);
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
  );
};

export default Index;
