import React from "react";

import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, styles, ...rest }) => {
  return (
    <button {...rest} className={`btn rounded-3 text-uppercase ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
