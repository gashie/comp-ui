import React from "react";
import { Dropdown } from "react-bootstrap";

const LanguageSelector = () => {
  return (
    <Dropdown className="nav-item dropdown px-md-1 d-none d-md-inline-flex" style={{border: 'none', backgroundColor: 'transparent'}}>
      <Dropdown.Toggle
        className="dropdown-toggle gray-6"
        variant="light"
        id="language-dropdown"
        title="language"
        style={{backgroundColor: 'transparent', border: 'none'}}
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
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M3.6 9h16.8"></path>
          <path d="M3.6 15h16.8"></path>
          <path d="M11.5 3a17 17 0 0 0 0 18"></path>
          <path d="M12.5 3a17 17 0 0 1 0 18"></path>
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu shadow rounded-4 p-2 p-xl-3 li_animate">
        <Dropdown.Item className="mb-1 rounded-pill active" href="#" title="language">
          English
        </Dropdown.Item>
        <Dropdown.Item className="mb-1 rounded-pill" href="#" title="language">
          Hindi
        </Dropdown.Item>
        <Dropdown.Item className="mb-1 rounded-pill" href="#" title="language">
          Spanish
        </Dropdown.Item>
        <Dropdown.Item className="mb-1 rounded-pill" href="#" title="language">
          Arabic
        </Dropdown.Item>
        <Dropdown.Item className="mb-1 rounded-pill" href="#" title="language">
          French
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
