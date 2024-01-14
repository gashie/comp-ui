import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedMod } from "../../store/actions";

import FullScreenModal from "./Components/FullScreenModal";
import Setting from "../Setting/CommonSettings";
import UserDropdown from "../../Partials/Widgets/UserDropdown/UserDropdown";

import profileImage from "../../assets/images/profile_av.png";
import avatar1 from "../../assets/images/xs/avatar1.jpg";
import avatar2 from "../../assets/images/xs/avatar2.jpg";
import avatar3 from "../../assets/images/xs/avatar3.jpg";
import avatar4 from "../../assets/images/xs/avatar4.jpg";
import ThemeSelector from "./Theme";
import LanguageSelector from "./Language";
import NotificationDropdown from "./Notification";
import UserTrigger from "./Profile";

const CommonHeader = () => {
  const dispatch = useDispatch();
  const [selectedMode, setSelectedMode] = useState("light");

  const setThemeMode = (mode) => {
    setSelectedMode(mode);
  };

  let iconId;
  switch (selectedMode) {
    case "light":
      iconId = "sun-fill";
      break;
    case "dark":
      iconId = "moon-stars-fill";
      break;
    case "auto":
      iconId = "circle-half";
      break;
    default:
      iconId = "sun-fill";
  }

  useEffect(() => {
    dispatch(setSelectedMod(selectedMode));
  }, [selectedMode]);

  return (
    <>
      <header className="px-4" id="headerbarDark" data-bs-theme="none">
        <div className="d-flex justify-content-between align-items-center py-2 w-100">
          <button
            type="button"
            className="btn text-accent btn-link p-0 me-3 d-none d-md-inline-flex"
            data-bs-toggle="modal"
            data-bs-target="#FullscreenMenu"
          >
            <svg
              className="svg-stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </button>
          {/* <!--[ Start:: Full screen modal popup menu ]--> */}
          <FullScreenModal />

          {/* <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
            </svg>
            <input type="search" className="form-control border-0" accesskey="/" placeholder="What are you looking for?"/> */}

          <form className="dropdown main-search me-md-4 w-50 d-none d-md-inline-flex">
            <div
              className="w-100 "
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <svg
                className="svg-stroke search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="Search..."
              />
            </div>
            <div className="dropdown-menu shadow rounded-4 p-3 p-xl-4 w-100">
              <h6
                className="fl-title"
                style={{ "--text-color": "var(--theme-color1)" }}
              >
                Recent Search
              </h6>
              <div className="tagcloud mb-4">
                <a
                  href="#"
                  className="tag-link rounded-pill border px-3"
                  style={{ "--hover-color": "var(--theme-color1)" }}
                >
                  Vite
                </a>
                <a
                  href="#"
                  className="tag-link rounded-pill border px-3"
                  style={{ "--hover-color": "var(--theme-color2)" }}
                >
                  Bootstra 5
                </a>
                <a
                  href="#"
                  className="tag-link rounded-pill border px-3"
                  style={{ "--hover-color": "var(--theme-color1)" }}
                >
                  Contact's
                </a>
              </div>
              <h6
                className="fl-title"
                style={{ "--text-color": "var(--theme-color2)" }}
              >
                Help
              </h6>
              <div className="d-flex flex-column mb-4">
                <a className="mb-1 me-1" href="#">
                  <svg
                    className="svg-stroke me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                  <span>New around here? Sign up</span>
                </a>
                <a className="mb-1" href="#">
                  <svg
                    className="svg-stroke me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                  <span>How to setup theme?</span>
                </a>
                <a className="mb-1" href="#">
                  <svg
                    className="svg-stroke me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                  <span>View detail documentation</span>
                </a>
              </div>
              <h6
                className="fl-title"
                style={{ "--text-color": "var(--theme-color3)" }}
              >
                New users
              </h6>
              <div className="d-flex flex-column">
                <a href="#" className="d-flex align-items-center mb-2 me-2">
                  <img
                    className="avatar rounded-circle border border-3 me-2"
                    src={avatar1}
                    alt="avatar"
                  />
                  Kevin Gill
                </a>
                <a href="#" className="d-flex align-items-center mb-2 me-2">
                  <img
                    className="avatar rounded-circle border border-3 me-2"
                    src={avatar2}
                    alt="avatar"
                  />
                  Michelle Glover
                </a>
                <a href="#" className="d-flex align-items-center mb-2 me-2">
                  <img
                    className="avatar rounded-circle border border-3 me-2"
                    src={avatar3}
                    alt="avatar"
                  />
                  Jony Doe
                </a>
              </div>
            </div>
          </form>
          <ul className="header-menu flex-grow-1">
            {/* <!--[ Start:: notification ]--> */}
           <NotificationDropdown />
            {/* <!--[ Start:: language ]--> */}
          
            <LanguageSelector />
            {/* <!--[ Start:: theme light/dark ]--> */}
        
           <ThemeSelector setThemeMode={setThemeMode} selectedMode={selectedMode} iconId={iconId} />
            {/* <!--[ Start:: theme setting ]--> */}
            <div className="nav-item dropdown px-md-1">
              <a
                className="dropdown-toggle gray-6"
                href="#offcanvas_setting"
                data-bs-toggle="offcanvas"
                aria-expanded="false"
                title="template setting"
              >
                <svg
                  className="svg-stroke"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
              </a>
            </div>
            <li className="nav-item py-2 py-md-1 col-auto">
              <div className="vr d-none d-sm-flex h-100 mx-sm-2"></div>
            </li>
            {/* <!--[ Start:: user detail ]--> */}
            {/* <li className="nav-item user ms-3">
              <a
                className="dropdown-toggle gray-6 d-flex text-decoration-none align-items-center lh-sm p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="User"
                data-bs-auto-close="outside"
              >
                <img
                  className="avatar rounded-circle border border-3"
                  src={profileImage}
                  alt="avatar"
                />
                <span className="ms-2 fs-6 d-none d-sm-inline-flex">
                  Michelle
                </span>
              </a>
              <UserDropdown />
            </li> */}
            <UserTrigger />
          </ul>
        </div>
      </header>
      <Setting />
    </>
  );
};

export default CommonHeader;
