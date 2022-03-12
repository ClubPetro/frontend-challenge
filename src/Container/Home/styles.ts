import { Grid } from "@mui/material";
import styled from "styled-components";

export const Form = styled("form")`
  width: 100%;
  height: 200px;
  padding: 72px;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 72px 20px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 320px) {
    padding: 20px;
  }
`;

export const SelectArea = styled("div")`
  && {
    width: 100%;
    max-width: 300px;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
`;

export const SelectAreaModal = styled("div")`
  margin-top: 10px;
`;

export const InputAreaModal = styled("div")`
  margin-top: 10px;
`;

export const InputLocal = styled("div")`
  max-width: 455px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 767px) {
    margin: 10px 0 0 0;
    max-width: 100%;
  }
`;

export const InputDate = styled("div")`
  max-width: 238px;
  width: 100%;
  margin-right: 20px;
  @media (max-width: 767px) {
    margin: 10px 0 0 0;
    max-width: 100%;
  }
`;

export const ButtonArea = styled("div")`
  max-width: 200px;
  width: 100%;
  @media (max-width: 767px) {
    margin: 10px 0 0 0;
    max-width: 100%;
  }
`;

export const ContentBody = styled(Grid)`
  && {
  }
`;

export const Item = styled(Grid).attrs({ item: true })`
  && {
  }
`;

export const FormModal = styled("form")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 7px;
  outline: none;

  padding: 20px;
  width: 500px;
  h2 {
    margin-bottom: 5px;
  }
  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const ButtonAreaModal = styled("div")`
  margin-top: 20px;
`;

export const ContainerConfirmeDelete = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 7px;
  outline: none;
  width: 500px;
  padding: 20px;
  h2 {
    margin-bottom: 5px;
  }
  @media (max-width: 767px) {
    width: 95%;
  }
`;
