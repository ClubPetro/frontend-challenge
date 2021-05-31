import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  /* width: 100%; */
  display: flex;

  align-items: center;
  justify-content: center;
  margin-left: 30px;
  /* margin-top: 23px; */

  background-color: var(--darkGreen);
  border-radius: 0.5rem;
  text-decoration-color: white;

  .MuiButton-text {
    color: white;
  }
`;

const ButtonSC = styled(Button)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  height: 50px;
  width: 200px;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;
`;

export default function ButtonForm() {
  return (
    <Container>
      <ButtonSC>Adicionar</ButtonSC>
    </Container>
  );
}
