import React,{ButtonHTMLAttributes} from "react";
import { ButtonSend } from "./styles";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement>  {
  text: string;
}

const Button: React.FC<ButtonProp> = ({ text, ...rest }) => {
  return (
    <ButtonSend {...rest} type="button">
      {text}
    </ButtonSend>
  );
};

export default Button;
