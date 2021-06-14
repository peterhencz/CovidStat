import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactChild;
  type?: "button" | "submit";
  additionalStyles?: string;
  onClick?: () => void;
}
