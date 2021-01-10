import React, { ChangeEvent } from "react";
import { Input, Container, InputMaskDate } from "./styles";

interface TextInputProps {
  label: string;
  placeholder: string;
  InputSize?: "small";
  handleChange: Function;
  mask?: boolean;
}

const InputText: React.FC<TextInputProps> = ({
  label,
  placeholder,
  handleChange,
  mask,
}) => {
  function handleChangeSelect(event: ChangeEvent<HTMLInputElement>): void {
    handleChange(event.target.value);
  }

  return (
    <Container>
      <label>{label}</label>
      {mask ? (
        <InputMaskDate
          mask="99/9999"
          onChange={(event) => handleChangeSelect(event)}
          placeholder={placeholder}
        />
      ) : (
        <Input
          onChange={(event) => handleChangeSelect(event)}
          placeholder={placeholder}
        />
      )}
    </Container>
  );
};

export default InputText;
