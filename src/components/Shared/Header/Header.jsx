import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo.png";
import { Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [hide, setHide] = useState(true);
  return (
    <header className="header-component">
      <Container fluid>
        <nav className="d-flex align-items-center justify-content-between">
          <div className="logo-area">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="" />
            </Link>
          </div>

          <div className="menu-area">
            <div className="navbar-toggle">
              <button
                className=" d-lg-none d-block"
                onClick={() => {
                  setHide((prev) => {
                    console.log("prev", prev);
                    return !prev;
                  });
                }}
              >
                <FaBars />
              </button>
            </div>
            <div
              className={`link-items d-lg-block ${hide ? "d-none" : ""}`}
              onClick={() => setHide(true)}
            >
              <NavLink to="/home">home</NavLink>
              <NavLink to="/about">about</NavLink>
              <NavLink to="/blogs">blogs</NavLink>
              <NavLink to="/listings">listings</NavLink>
              <NavLink to="/gallery">gallery</NavLink>
              <NavLink to="/contact">contact</NavLink>
              <NavLink to="/sign-out">Sign Out</NavLink>
              <NavLink to="/login">login</NavLink>
              <NavLink to="/sign-up">sign up</NavLink>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
