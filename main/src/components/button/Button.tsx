import { FC, ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className="Button" {...props}>
      {props.icon && props.icon}
      {props.label}
    </button>
  );
};

export default Button;
