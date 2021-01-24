import styled from "styled-components";

export const Container = styled.form`
  width: 50vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border-radius: 7px;
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    padding: 10px;
    width: 20%;
    border: none;
    background: #006c18;
    border-radius: 7px;
    color: #fff;
    font: 400 1rem Roboto, sans-serif;
    margin-top: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font: 400 1rem Roboto, sans-serif;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    padding: 10px;
  }
`;
