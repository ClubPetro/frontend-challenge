import React from "react";
import { ButtonSend } from "./styles";

interface ButtonProp {
  text: string;
  handleClick: Function;
}

const Button: React.FC<ButtonProp> = ({ text, handleClick }) => {
  return (
    <ButtonSend onClick={() => handleClick()} type="button">
      {text}
    </ButtonSend>
  );
};

export default Button;
