import React from "react";

import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
          {children}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
