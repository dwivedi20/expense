import React from "react";
import Logo from "../assets/book.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-danger">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">
          <div className="d-flex align-items-center">
            <img src={Logo} alt="" />
            KHATABOOK
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
