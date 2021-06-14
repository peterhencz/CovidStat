import React from "react";

import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid d-flex flex-row">{children}</div>
    </nav>
  );
};

export default Navbar;
