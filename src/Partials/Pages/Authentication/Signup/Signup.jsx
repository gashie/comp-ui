import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormFeedback, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../../store/actions";

const Signup = () => {
  const dispatch = useDispatch();

  const [passwordMatch, setPasswordMatch] = useState(true);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      // img: (contact && contact.img) || '',
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      date_of_birth: "",
      phone_number: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please provide username"),
      password: Yup.string().required("Please provide password"),
      email: Yup.string().required("Please provide email"),
      first_name: Yup.string().required("Please provide first name"),
      last_name: Yup.string().required("Please provide last name"),
      date_of_birth: Yup.string().required("Please provide date of birth"),
      phone_number: Yup.string().required("Please provide phone number"),
      confirm_password: Yup.string().required("Please confirm password"),

      //description: Yup.string().required("Please provide description"),
    }),
    onSubmit: (values) => {
      const {
        username,
        password,
        email,
        first_name,
        last_name,
        date_of_birth,
        phone_number,
      } = values;

      dispatch(
        registerUser({
          account: {
            username,
            password,
            email,
            first_name,
            last_name,
            date_of_birth,
            phone_number,
          },
        })
      );
      validation.resetForm();
    },
  });

  console.log(validation.errors, "errors");

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
            <h1 className="h2 title-font ">
              Welcome to <b>BE360</b>
            </h1>
            
          </li>
          <li className="col-6">
            <label className="form-label">Full name</label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              className="form-control p-3"
              placeholder="Eg. John"
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.first_name || ""}
              invalid={
                validation.touched.first_name && validation.errors.first_name
                  ? true
                  : false
              }
            />
            {validation.touched.first_name && validation.errors.first_name ? (
              <FormFeedback type="invalid">
                {validation.errors.first_name}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-6">
            <label className="form-label">&nbsp;</label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              className="form-control p-3"
              placeholder="Eg. Doe"
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.last_name || ""}
              invalid={
                validation.touched.last_name && validation.errors.last_name
                  ? true
                  : false
              }
            />
            {validation.touched.last_name && validation.errors.last_name ? (
              <FormFeedback type="invalid">
                {validation.errors.last_name}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-12">
            <label className="form-label">Username</label>
            <Input
              type="text"
              name="username"
              id="username"
              className="form-control p-3"
              placeholder="Eg. johndoe"
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
            <label className="form-label">username address</label>
            <Input
              type="text"
              name="email"
              id="email"
              className="form-control p-3"
              placeholder="Eg. john@gmail.com"
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.email || ""}
              invalid={
                validation.touched.email && validation.errors.email
                  ? true
                  : false
              }
            />
            {validation.touched.email && validation.errors.email ? (
              <FormFeedback type="invalid">
                {validation.errors.email}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-12">
            <label className="form-label">Phone Number</label>
            <Input
              type="text"
              name="phone_number"
              id="phone_number"
              className="form-control p-3"
              placeholder="Eg. 02005002300"
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.phone_number || ""}
              invalid={
                validation.touched.phone_number &&
                validation.errors.phone_number
                  ? true
                  : false
              }
            />
            {validation.touched.phone_number &&
            validation.errors.phone_number ? (
              <FormFeedback type="invalid">
                {validation.errors.phone_number}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-12">
            <label className="form-label">Date of Birth</label>
            <Input
              type="date"
              name="date_of_birth"
              id="date_of_birth"
              className="form-control p-3"
              placeholder=""
              validate={{
                required: { value: true },
              }}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.date_of_birth || ""}
              invalid={
                validation.touched.date_of_birth &&
                validation.errors.date_of_birth
                  ? true
                  : false
              }
            />
            {validation.touched.date_of_birth &&
            validation.errors.date_of_birth ? (
              <FormFeedback type="invalid">
                {validation.errors.date_of_birth}
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-6">
            <label className="form-label">Password</label>
            {/* <input
              type="password"
              className="form-control form-control-lg"
              placeholder="8+ characters required"
            /> */}

            <Input
              id="password"
              name="password"
              className="form-control form-control-lg"
              // placeholder="Enter password"
              type="password"
              onChange={(e) => {
                validation.handleChange(e);
                if (e.target.value === validation.values.confirm_password) {
                  setPasswordMatch(true);
                } else {
                  setPasswordMatch(false);
                }
              }}
              onBlur={validation.handleBlur}
              value={validation.values.password || ""}
              invalid={
                validation.touched.password &&
                (validation.errors.password || !passwordMatch)
              }
            />
          </li>
          <li className="col-6">
            <label className="form-label">Confirm password</label>
            {/* <input
              type="password"
              
              placeholder="8+ characters required"
            /> */}

            <Input
              id="confirm_password"
              name="confirm_password"
              type="password"
              className="form-control form-control-lg"
              // placeholder="Confirm Password"
              onChange={(e) => {
                validation.handleChange(e);
                if (e.target.value === validation.values.password) {
                  setPasswordMatch(true);
                } else {
                  setPasswordMatch(false);
                }
              }}
              onBlur={validation.handleBlur}
              value={validation.values.confirm_password || ""}
              invalid={
                validation.touched.confirm_password &&
                (validation.errors.confirm_password || !passwordMatch)
              }
            />
            {validation.touched.confirm_password &&
            (validation.errors.confirm_password || !passwordMatch) ? (
              <FormFeedback type="invalid">
                <div>
                  {validation.errors.confirm_password ||
                    "Password and Confirm Password must match"}
                </div>
              </FormFeedback>
            ) : null}
          </li>
          <li className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="TermsConditions"
              />
              <label className="form-check-label" htmlFor="TermsConditions">
                I accept the{" "}
                <a href="#" title="" className="" style={{ color: "#fabe00" }}>
                  Terms and Conditions
                </a>
              </label>
            </div>
          </li>
          <li className="col-12 my-4">
            <Button
              className="btn btn-lg w-100 btn-primary text-uppercase mb-2 text-light"
              style={{ backgroundColor: "#fabe00" }}
              type="submit"
            >
              SIGN UP
            </Button>
            {/* <a className="btn btn-lg btn-secondary w-100" href="#">
              <i className="fa fa-google me-2"></i>
              <span>Sign up with Google</span>
            </a> */}
          </li>
          <li className="col-12">
            <span className="text-muted d-flex d-sm-inline-flex mt-3 mt-sm-0">
              Already have an account?{" "}
              <Link className="ms-2" to="/signin">
                Sign in here
              </Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Signup;
