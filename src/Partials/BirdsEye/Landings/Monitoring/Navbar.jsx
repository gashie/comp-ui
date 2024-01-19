import { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Spinner,
  Button,
  NavbarToggler,
  Input,
} from "reactstrap";
import img from "../../../../Common/CommonBrand/brand.png";
import { useSelector } from "react-redux";
// import "./style.css";

import { Modal } from "reactstrap";
import { Link } from "react-router-dom";

function Navs(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const { isloggedIn, loadingUserinfo, errorUserinfo, userInfo } = useSelector(
    (state) => ({
      isloggedIn: state.Login.isloggedIn,
      loadingUserinfo: state.Login.loadingUserinfo,
      errorUserinfo: state.Login.errorUserinfo,
      userInfo: state.Login.userInfo,
    })
  );

  const toggle = () => setIsOpen(!isOpen);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollPosition = window.scrollY;
  //       const screenHeight = window.innerHeight;
  //       const showNavbarCondition = scrollPosition > screenHeight * 0.7;

  //       setShowNavbar(showNavbarCondition);
  //     };

  //     // Attach the event listener when the component mounts
  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="d-flex justify-content-center">
      <Navbar
        {...args}
        light
        expand="md"
        style={{
          //   display: showNavbar ? "block" : "none",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
          borderRadius: "30px",
          border: "1px solid #e0e0e0",
        }}
        className="w-50 mt-3"
      >
        <div></div>
        <NavbarBrand href="/">
          <img src={img} className="img-fluid" width="30" alt="Logo"></img>
        </NavbarBrand>

        <NavbarToggler
          onClick={toggle}
          style={{ border: "1px solid black", color: "black" }}
          className="menu-toggler text-dark"
        >
          <i className="bx bx-menu-alt-right"></i>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Applications</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <div>
          {/* <Input  type="text"
  placeholder="Your Placeholder"
  className="custom-input" /> */}
          <Link to={isloggedIn ? "/home": "/signin"}>
            <Button
              color="primary"
              // onClick={toggleModal}
              className=""
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "30px",
              }}
              disabled = {loadingUserinfo}
            >
              <i className="bi-person mx-2"></i>
              {isloggedIn ? userInfo?.username : loadingUserinfo ? <Spinner size={'sm'}/> : "Account"}
            </Button>
          </Link>
        </div>
      </Navbar>

      <div>
        <Modal
          isOpen={modalOpen}
          toggle={toggleModal}
          style={{ backgroundColor: "transparent" }}
          centered
        >
          <div
            className="text-center"
            style={{ backgroundColor: "transparent" }}
          >
            <Input
              type="text"
              placeholder="Search ..."
              className="custom-input p-3"
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navs;
