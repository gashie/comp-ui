import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Input, FormFeedback, Button, Spinner } from "reactstrap";
import { loginUser } from "../../../../store/actions";

const Signin = () => {
  const { error, loading } = useSelector((state) => ({
    error: state.Login.error,
    loading: state.Login.loading,
  }));

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      // img: (contact && contact.img) || '',
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please provide username"),
      password: Yup.string().required("Please provide password"),

      //description: Yup.string().required("Please provide description"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
      validation.resetForm();
    },
  });

  return (
    <div className="px-xl-5 px-4 auth-body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <ul className="row g-3 list-unstyled li_animate">
          <li className="col-12">
            <h1 className="h2 title-font">
              Welcome to <b>BE360</b>
            </h1>
            <p>Your Admin Dashboard</p>
          </li>
          <li className="col-12">
            <label className="form-label">Username</label>
            <Input
              type="text"
              name="username"
              id="username"
              className="form-control p-3"
              placeholder="Username"
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.username || ""}
              invalid={
                validation.touched.username && validation.errors.username
                  ? true
                  : false
              }
            />
            {validation.touched.username && validation.errors.username ? (
              <FormFeedback type="invalid">
                {validation.errors.username}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-12">
            <div className="form-label">
              <span className="d-flex justify-content-between align-items-center">
                Password
                <Link
                  className=""
                  to="/password-reset"
                  style={{ color: "#fabe00" }}
                >
                  Forgot Password?
                </Link>
              </span>
            </div>
            <Input
              type="password"
              name="password"
              id="password"
              className="form-control p-3"
              placeholder="***********"
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.password || ""}
              invalid={
                validation.touched.password && validation.errors.password
                  ? true
                  : false
              }
            />
            {validation.touched.password && validation.errors.password ? (
              <FormFeedback type="invalid">
                {validation.errors.password}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-12">
            <div className="form-check fs-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Rememberme"
              />
              <label className="form-check-label fs-6" htmlFor="Rememberme">
                Remeber this Device
              </label>
            </div>
          </li>
          <li className="col-12 my-lg-4">
            <Button
              className="btn btn-lg w-100 btn-primary text-uppercase mb-2 text-light"
              style={{ backgroundColor: "#fabe00" }}
              type="submit"
              disabled={loading}
            >
              {error ? null : loading ? (
                <Spinner size="sm" className="me-2">
                  {" "}
                  Loading...{" "}
                </Spinner>
              ) : null}
              SIGN IN
            </Button>

            {/* <a className="btn btn-lg btn-secondary w-100" href="#">
                            <i className="fa fa-google me-2"></i>
                            <span>Sign in with Google</span>
                        </a> */}
          </li>
          <li className="col-12">
            <span className="text-muted d-flex d-sm-inline-flex">
              New to BE360{" "}
              <Link className="ms-2" to="/signup" title="">
                Sign up here
              </Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Signin;
