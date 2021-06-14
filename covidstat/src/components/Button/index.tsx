import React from "react";

import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  additionalStyles,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={`btn ${additionalStyles}`}>
      {children}
    </button>
  );
};

export default Button;
