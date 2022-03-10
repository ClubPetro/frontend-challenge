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

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 320px) {
    padding: 30px;
  }
`;

export const CheckboxArea = styled("div")`
  width: 100%;
  max-width: 300px;
  @media (max-width: 767px) {
    max-width: 100%;
  }
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
    justify-content: center;
    margin-top: 50px;
    padding: 0 0 0 36px;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
`;

export const Item = styled(Grid).attrs({ item: true })`
  && {
    max-width: 250px;
    width: 100%;
    margin: 0 30px 30px 0;

    @media (max-width: 1024px) {
      margin: 0 10px 10px 0;
    }
  }
`;
