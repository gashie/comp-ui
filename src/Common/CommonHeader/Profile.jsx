import React from "react";
import { Link } from "react-router-dom";
import CountingAnimation from "../../Common/CommonCounting/CountingAnimation";
import { Dropdown } from "react-bootstrap";
import img from "../CommonBrand/brand.png";

import { useSelector } from "react-redux";

const UserDropdown = () => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.Login.userInfo,
  }));

  return (
    <Dropdown.Menu className="dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
      <div className="bg-body p-3 rounded-3">
        <h4 className="mb-1 title-font text-gradient">
          {userInfo?.first_name} {userInfo?.last_name}
        </h4>
        <p className="small text-muted">{userInfo?.email}</p>
        {/* <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Update my status"
        /> */}
      </div>
      <ul className="list-unstyled mt-3">
        <li>
          <Link
            as="a"
            className="dropdown-item rounded-pill"
            aria-label="my wallet"
            to="/my-wallet"
          >
            {/* <div className="d-flex align-items-center">
              <span className="align-middle me-2">Balance:</span>
              <span className="fw-bold text-success">
                <CountingAnimation
                  start={0}
                  separator={"."}
                  currency={"$"}
                  end={14000}
                  duration={5000}
                />
              </span>
            </div> */}
          </Link>
        </li>
        <li>
          <Link
            as="a"
            className="dropdown-item rounded-pill"
            aria-label="my profile"
            to="/app/my-profile"
          >
            My Profile
          </Link>
        </li>
        <li>
          <Link
            as="a"
            className="dropdown-item rounded-pill"
            aria-label="my task"
            to="/home"
          >
            My Dashboard
          </Link>
        </li>
        {/* <li>
          <Link
            as="a"
            className="dropdown-item rounded-pill"
            aria-label="account settings"
            to="/app/account-settings"
          >
            Settings
          </Link>
        </li> */}
        <li className="dropdown-divider"></li>
        <li>
          <Link
            as="a"
            className="dropdown-item rounded-pill"
            aria-label="Add another account"
            to="#"
          >
            Add another account
          </Link>
        </li>
      </ul>
      <Link
        as="a"
        className="btn py-2 btn-primary w-100 mt-3 rounded-pill"
        to="/signin"
        role="button"
      >
        Logout
      </Link>
      <div className="mt-3 text-center small">
        <a className="text-muted me-1" href="#!">
          Privacy policy
        </a>
        •
        <a className="text-muted mx-1" href="#!">
          Terms
        </a>
        •
        <a className="text-muted ms-1" href="#!">
          Cookies
        </a>
      </div>
    </Dropdown.Menu>
  );
};

const UserTrigger = () => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.Login.userInfo,
  }));
  return (
    <li className="nav-item user ms-3">
      <Dropdown align="end">
        <Dropdown.Toggle
          className="gray-6 d-flex text-decoration-none align-items-center lh-sm p-0"
          role="button"
          title="User"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <img
            className="avatar rounded-circle border border-3"
            src={img}
            alt="avatar"
          />
          <span className="ms-2 fs-6 d-none d-sm-inline-flex">
            {userInfo?.username}
          </span>
        </Dropdown.Toggle>
        <UserDropdown />
      </Dropdown>
    </li>
  );
};

export default UserTrigger;
