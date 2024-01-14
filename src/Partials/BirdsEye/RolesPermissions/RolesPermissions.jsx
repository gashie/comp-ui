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
  addNewRolePermissions,
  addNewRoles,
  getPermissionsAction,
  getRolePermissionsAction,
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
      role_id: "",
      permission_id: "",
    },
    validationSchema: Yup.object({
      permission_id: Yup.string().required("Please select a permission"),
      role_id: Yup.string().required("Please select a role"),

      //description: Yup.string().required("Please provide description"),
    }),
    onSubmit: (values) => {
      dispatch(addNewRolePermissions({
        role_id: values.role_id, 
        permission_id: values.permission_id
      }));
      validation.resetForm()
      toggleRightCanvas()

    },
  });

  console.log(validation.errors);

  useEffect(() => {
    dispatch(getPermissionsAction());
    dispatch(getRolesAction());
  }, [dispatch]);

  const { loading, error, permissions, rolesLoading, roles } = useSelector(
    (state) => ({
      loading: state.RolesPermissionsReducer.loading,
      rolesLoading: state.RolesReducer.loadingrolePermissions,
      roles: state.RolesReducer.roles,
      error: state.RolesPermissionsReducer.permissionserror,
      permissions: state.RolesPermissionsReducer.rolePermissions,
    })
  );

  const { perm } = useSelector((state) => ({
    perm: state.PermissionsReducer.permissions,
  }));

  const columns = [
    {
      Header: "Assinged Permissions",
      accessor: "permission_name", // Replace with the actual accessor for your data
      Cell: ({ value }) => <span style={{ color: "black" }}>{value}</span>,
    },

    // Add more columns as needed
  ];

  useEffect(() => {
    dispatch(getRolesAction());
  }, [dispatch]);

  const options = [
    { label: "No", value: false },
    { label: "Yes", value: true },
  ];

  let adminOptions = options.map(function (item) {
    return { value: item.value, label: item.label };
  });

  let roleOptions = roles.map(function (item) {
    return { value: item?.role_id, label: item?.role_name };
  });

  let permOptions = perm.map(function (item) {
    return { value: item?.permission_id, label: item?.permission_name };
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
                    <i className="bi-plus"></i>Assign Role
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
                  <h3>Assign Role to Permission</h3>
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
                          <label className="col-form-label">Role</label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Select
                              name="role_id"
                              id="role_id"
                              //   isLoading={onlyalertgrouploading}
                              value={roleOptions.find(function (e) {
                                return e.value === validation.values.role_id;
                              })}
                              onChange={(e) =>
                                validation.setFieldValue("role_id", e.value)
                              }
                              className="mb-0"
                              options={roleOptions}
                              key={validation.values.role_id}
                            ></Select>
                          
                            {validation.touched.role_id &&
                            validation.errors.role_id ? (
                              <p style={{ color: "red" }}>
                              {validation.errors.role_id}
                            </p>
                            ) : null}
                          </fieldset>
                        </div>
                        <div className="mb-3 col-md-12 col-12">
                          <label className="col-form-label">Permission</label>
                          <fieldset className="form-icon-group left-icon position-relative">
                            <Select
                              name="permission_id"
                              id="permission_id"
                              //   isLoading={onlyalertgrouploading}
                              value={permOptions.find(function (e) {
                                return (
                                  e.value === validation.values.permission_id
                                );
                              })}
                              onChange={(e) =>
                                validation.setFieldValue(
                                  "permission_id",
                                  e.value
                                )
                              }
                              className="mb-0"
                              options={permOptions}
                              key={validation.values.permission_id}
                            ></Select>
                            
                            {validation.touched.permission_id &&
                            validation.errors.permission_id ? (
                              <p style={{ color: "red" }}>
                              {validation.errors.permission_id}
                            </p>
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
      {/* <div className="row g-4 li_animate">
        <div className="card mb-3 col-xl-4 col-lg-4">
          <div className="card-body">
            <div className="row g-4 li_animate">
              <div className="col-xl-6 col-lg-6">
                <h4>View List of Assigned ROles</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 col-xl-6 col-lg-6">
          <div className="card-body">
            <div className="row g-4 li_animate">
              <div className="col-xl-6 col-lg-6">
                <h4>View List of Assigned ROles</h4>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="row g-3">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="card p-3 px-4">
            <div className="text-center">
              <h6 className="fw-bolder ">List of Assigned Roles</h6>
            </div>
            <div className="mt-3">
              <p className="text-muted">
                Select a specific role from the list below to view the specific
                permissions assigned to it.
              </p>
            </div>

            <div className="mt-3">
              <Select
                name="is_system"
                value={roleOptions.find(function (e) {
                  return e.value === validation.values.is_system;
                })}
                onChange={(selectedOption) => {
                  const { value, label } = selectedOption;

                  console.log("Selected Value:", value);
                  console.log("Selected Label:", label);

                  const selectedItem = roleOptions.find(
                    (option) => option.value === value
                  );

                  const selectedItemId = selectedItem ? selectedItem.id : null;
                  console.log("Selected Item ID:", selectedItemId);

                  // Update the form field

                  dispatch(
                    getRolePermissionsAction({
                      role_id: value,
                    })
                  );
                  validation.setFieldValue("is_system", value);
                }}
                className="mb-0"
                options={roleOptions}
                id="taginput-choices"
                key={validation.values.is_system}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="card p-3 px-4">
            <DataTable
              columns={columns}
              data={permissions}
              useGlobalFilter={true}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* Permission */}
    
    </div>
  );
};

export default Index;
