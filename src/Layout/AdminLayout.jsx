import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { screenMapping } from "./Components/ScreenMapping";
import { setScreenWidth } from "../store/actions";
import CommonBrand from "../Common/CommonBrand/CommonBrand";
import CommonHeader from "../Common/CommonHeader/CommonHeader";
import CommonSidebar from "../Common/CommonSidebar/CommonSidebar";
import CommonRightbar from "../Common/CommonRightbar/CommonRightbar";
import CommonBreadcrumb from "../Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonFooter from "../Common/CommonFooter/CommonFooter";
import CommonSettings from "../Common/Setting/CommonSettings";
import Routes from "../Routes";

const themeColorMappings = {
  ValenciaRed: "#D63B38",
  SunOrange: "#F7A614",
  Applegreen: "#5BC43A",
  CeruleanBlue: "#00B8D6",
  Mariner: "#0066FE",
  PurpleHeart: "#6238B3",
  FrenchRose: "#EB5393",
};

const AdminLayout = ({
  menuTitle,
  themeColor,
  layout,
  borderStroke,
  borderLayout,
  boxLayout,
  monochrome,
  borderRadius,
  iconColor,
  themeMode,
}) => {
  const dispatch = useDispatch();

  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [rightbarHidden, setRightbarHidden] = useState(false);
  const [colorCode, setColorCode] = useState("#5BC43A");

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (themeColorMappings.hasOwnProperty(themeColor)) {
      setColorCode(themeColorMappings[themeColor]);
    } else {
      setColorCode("#5BC43A");
    }
  }, [themeColor]);

  useEffect(() => {
    document.documentElement.style.setProperty("--tooltip-color", colorCode);
  }, [colorCode]);

  useEffect(() => {
    dispatch(setScreenWidth(rightbarHidden));
  }, [rightbarHidden]);

  useEffect(() => {
    if (screenMapping.hasOwnProperty(pathname)) {
      setRightbarHidden(true);
    } else {
      setRightbarHidden(false);
    }
  }, [pathname]);

  const toggleSidebar = () => {
    setSidebarHidden((prevState) => !prevState);
  };

  const toggleRightbar = () => {
    setRightbarHidden((prevState) => !prevState);
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

    console.log("eyy")
    if (!isloggedIn) {
      console.log("eynn")
      navigate("/signin");
      
    }

    if (errorUserinfo) {
      navigate("/signin");
    }
  }, [loadingUserinfo, isloggedIn, errorUserinfo, navigate]);


  return (
    <body
      data-bvite={`theme-${themeColor}`}
      data-bs-theme={themeMode}
      className={`docs ${borderRadius} ${monochrome} ${boxLayout} ${borderLayout} ${borderStroke} ${layout} ${
        sidebarHidden && "sidebar-hide"
      } ${rightbarHidden ? "rightbar-hide" : ""}`}
    >
      {/* <div data-bvite="theme-Applegreen" className="layout-border svgstroke-a layout-default"> */}
      <main
        className={`${
          boxLayout == "box-layout rightbar-hide"
            ? "container"
            : "container-fluid"
        } px-0`}
      >
        {/* <main className='container-fluid px-0'> */}
        <CommonBrand />

        <CommonHeader />
        <CommonSidebar iconColor={iconColor} />
        <CommonRightbar />
        <CommonBreadcrumb
          toggleSidebar={toggleSidebar}
          toggleRightbar={toggleRightbar}
        />

        <Routes />

        <CommonFooter />
        <CommonSettings />
      </main>
      {/* </div> */}
    </body>
  );
};

export default AdminLayout;
