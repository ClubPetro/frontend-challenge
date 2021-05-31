import grey from "@material-ui/core/colors/grey";
import styled from "styled-components";
import { useState } from "react";
import InputMask from "react-input-mask";
import MaterialInput from "@material-ui/core/Input";

const Container = styled.div`
  /* width: 100%; */
  margin-left: 30px;

  /* background-color: greenyellow; */
`;

const Label = styled.p`
  color: white;
  margin-bottom: 5px;
`;

const TextFieldSC = styled(MaterialInput)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  height: 50px;
  width: 240px;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;
  border: 1px solid ${grey[300]};
  background-color: white;
  border-radius: 0.25rem;
`;

// Will work fine
const Input = (props: any) => (
  <InputMask
    mask="99/9999"
    maskPlaceholder={null}
    value={props.value}
    onChange={props.onChange}
  >
    {(inputProps: any) => (
      <TextFieldSC {...inputProps} disableUnderline placeholder="mês/ano" />
    )}
  </InputMask>
);

export default function SelectDate() {
  const [goal, setGoal] = useState("");
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setGoal(event.target.value);
  };
  return (
    <Container>
      <Label>Meta</Label>
      <Input value={goal} onChange={handleChange} />
    </Container>
  );
}
