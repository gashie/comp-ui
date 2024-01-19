import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Signin from "../Partials/Pages/Authentication/Signin/Signin";
import Signup from "../Partials/Pages/Authentication/Signup/Signup";
import PasswordReset from "../Partials/Pages/Authentication/PasswordReset/PasswordReset";
import TwoStep from "../Partials/Pages/Authentication/TwoStep/TwoStep";
import Lockscreen from "../Partials/Pages/Authentication/Lockscreen/Lockscreen";
import Maintenance from "../Partials/Pages/Authentication/Maintenance/Maintenance";
import NoPageFound from "../Partials/Pages/Authentication/NoPageFound/NoPageFound";
import MonitoringLanding from "../Partials/BirdsEye/Landings/Monitoring/LandingPage";

import loginImg from "../assets/images/login-img.png";
import img from "../Common/CommonBrand/brand.png";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const authTitleMapping = {
    "/signin": "Signin",
    "/signup": "Signup",
    "/password-reset": "PasswordReset",
    "/two-step": "TwoStep",
    "/lockscreen": "Lockscreen",
    "/maintenance": "Maintenance",
    "/404": "NoPage",
    "/": "MonitoringLanding",
  };
  const authTitle = authTitleMapping[pathname] || "";

  const authComponents = {
    Signin: <Signin />,
    Signup: <Signup />,
    PasswordReset: <PasswordReset />,
    TwoStep: <TwoStep />,
    Lockscreen: <Lockscreen />,
    Maintenance: <Maintenance />,
    NoPage: <NoPageFound />,
    MonitoringLanding: <MonitoringLanding />,
  };

  const navigate = useNavigate();

    const { isloggedIn, loadingUserinfo, errorUserinfo } = useSelector(
      (state) => ({
        isloggedIn: state.Login.isloggedIn,
        loadingUserinfo: state.Login.loadingUserinfo,
        errorUserinfo: state.Login.errorUserinfo,
      })
    );

    useEffect(() => {

      // console.log("eyy")
      // if (isloggedIn) {
      
      //   navigate("/");

      // }

    }, [loadingUserinfo, isloggedIn, errorUserinfo, navigate]);

  console.log(location.pathname);

  return (
    <body
      data-bvite="theme-Applegreen"
      className="layout-border svgstroke-a layout-default auth"
    >
      {location.pathname !== "/" ? (
        <main className="container-fluid px-0">
          {/* <!-- start: project logo --> */}
          <div className="px-xl-5 px-4 auth-header" data-bs-theme="none">
            <a
              href="/index"
              className="brand-icon text-decoration-none d-flex align-items-center"
              title="BVITE Admin Template"
            >
              <img src={img} alt="logo" className="img-fluid " width="30"></img>
              <span className="fw-bold ps-2 fs-5 text-dark">BE360</span>
            </a>
          </div>

          {/* <!-- start: page menu link --> */}
          <aside className="px-xl-5 px-4 auth-aside" data-bs-theme="none">
            <img className="login-img" src={loginImg} alt="" />
          </aside>

          {/* <!-- start: page body area --> */}
          {authComponents[authTitle]}

          {/* <!-- start: page footer --> */}
          <footer className="px-xl-5 px-4">
            <p className="mb-0 text-muted">
              © 2024{" "}
              <a
                href="https://Pixelwibes.com/"
                target="_blank"
                title="pixelwibes"
              >
                BE360
              </a>
              , All Rights Reserved.
            </p>
          </footer>
        </main>
      ) : (
        <>
          <section className="" style={{height: "100vh"}}>
            {authComponents[authTitle]}
          </section>
        </>
      )}
    </body>
  );
};

export default AuthLayout;
