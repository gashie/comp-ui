import React from "react";
import { Dropdown } from "react-bootstrap";

const NotificationDropdown = () => {
  return (
    <Dropdown className="nav-item dropdown px-md-1 d-none d-md-inline-flex">
      <Dropdown.Toggle
        className="dropdown-toggle gray-6"
        variant="light"
        id="notification-dropdown"
        title="notification"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <span className="bullet-dot bg-primary animation-blink"></span>
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
          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
          <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
          <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path>
          <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path>
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu shadow rounded-4 notification">
        <div className="card border-0">
          <div className="card-header d-flex justify-content-between align-items-center py-3">
            <h4 className="mb-0 text-gradient title-font">Notifications</h4>
            <a href="#" className="btn btn-link" title="view all">
              View all
            </a>
          </div>
          <ul
            className="card-body p-0 list-unstyled mb-0 custom_scroll ps-2"
            style={{ height: "400px" }}
          >
            <li className="pe-2">
              <a className="d-flex p-lg-3 p-2 rounded-3" href="#">
                <div className="avatar sm">
                  <svg
                    className="svg-stroke"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                  </svg>
                </div>
                <div className="flex-fill ms-3">
                  <span className="d-flex justify-content-between">
                    <small className="text-primary">Holiday Sale</small>
                    <small className="text-muted">11:30 AM Today</small>
                  </span>
                  <p className="mb-0 mt-1">
                    Your New Campaign sale live on themeforest and our store is
                    approved.
                  </p>
                </div>
              </a>
            </li>
            {/* Add more notification items here */}
          </ul>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
