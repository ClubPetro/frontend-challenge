import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #4f9419;
  padding: 30px 10px 40px;

  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font: 400 1rem Roboto, sans-serif;
    color: #fff;
  }

  select,
  input {
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: #fff;
    color: #868686;
  }

  select {
    width: 20vw;
  }

  input {
    width: 10vw;
  }

  input#place {
    width: 40vw;
  }
`;

export const Button = styled.button`
  border: none;
  width: 10vw;
  background: #006c18;
  padding: 8px;
  font: 400 1rem Roboto, sans-serif;
  color: #fff;
  border-radius: 7px;
  margin-top: 17px;
  cursor: pointer;
`;
