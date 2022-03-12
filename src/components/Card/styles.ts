import styled from "styled-components";
import { Card, CardContent, Divider } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CloseIcon from "@mui/icons-material/Close";

export const CardStyles = styled(Card)`
  && {
    /* max-width: 250px; */
    max-height: 250px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CardContentStyles = styled(CardContent)`
  && {
    padding: 8px;
  }
`;

export const ContentHeader = styled("div")`
  && {
    padding: 0 8px;
  }
`;

export const Icons = styled("div")``;

export const ModeEditIconStyles = styled(ModeEditIcon)`
  && {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.placeholderColor};
    margin-right: 24px;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.titleTop};
    }
  }
`;

export const CloseIconStyles = styled(CloseIcon)`
  && {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.placeholderColor};
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.titleTop};
    }
  }
`;

export const ContentImage = styled("div")`
  display: flex;
  justify-content: space-between;
  img {
    margin-top: 18px;
  }
`;

export const CountriesTitle = styled("div")`
  margin: 16px 0 9px 0;
  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-size: ${({ theme }) => theme.fonts.size.medium};
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-transform: uppercase;
  }
`;

export const ContentBody = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 43px 18px 30px 18px;
  span {
    color: ${({ theme }) => theme.colors.titleTop};
    &:first-child {
      margin-bottom: 11px;
    }
  }
`;

export const DividerStyles = styled(Divider)`
  && {
    border-color: #ababab;
  }
`;
