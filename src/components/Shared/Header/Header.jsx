import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-component">
      <nav>
        <div className="logo-area">
          <Link to={"/"}>Logo</Link>
        </div>

        <div className="menu-area">
          <div className="link-items">
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/listings">listings</Link>
            <Link to="/gallery">gallery</Link>
            <Link to="/contact">contact</Link>
            <Link to="/sign-out">Sign Out</Link>
            <Link to="/login">login</Link>
            <Link to="/sign-up">sign up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
