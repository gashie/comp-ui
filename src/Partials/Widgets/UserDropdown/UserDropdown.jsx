import React from 'react';
import { Link } from 'react-router-dom';
import CountingAnimation from '../../../Common/CommonCounting/CountingAnimation';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const UserDropdown = () => {
  return (
    <Dropdown align="end">
      <DropdownButton variant="secondary" title="Michelle Glover">
        <div className="bg-body p-3 rounded-3">
          <h4 className="mb-1 title-font text-gradient">Michelle Glover</h4>
          <p className="small text-muted">michelle.glover@gmail.com</p>
          <input type="text" className="form-control form-control-sm" placeholder="Update my status" />
        </div>
        <Dropdown.Item as={Link} to="/my-wallet">
          <div className="d-flex align-items-center">
            <span className="align-middle me-2">Balance:</span>
            <span className="fw-bold text-success">
              <CountingAnimation start={0} separator={'.'} currency='$' end={14000} duration={5000} />
            </span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/app/my-profile">My Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/app/my-task">My Taskboard</Dropdown.Item>
        <Dropdown.Item as={Link} to="/app/account-settings">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} to="#">Add another account</Dropdown.Item>
      </DropdownButton>
      <Dropdown.Item as={Link} to="/signin" className="btn py-2 btn-primary w-100 mt-3 rounded-pill">
        Logout
      </Dropdown.Item>
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
    </Dropdown>
  );
};

export default UserDropdown;
