import React from "react";

import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {children}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
