import styled from "styled-components";
import { Card, CardContent, Divider } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CloseIcon from "@mui/icons-material/Close";

export const CardStyles = styled(Card)`
  max-width: 250px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CardContentStyles = styled(CardContent)`
  && {
    padding: 8px;
  }
`;

export const ContentHeader = styled("div")`
  && {
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Icons = styled("div")``;

export const ModeEditIconStyles = styled(ModeEditIcon)`
  && {
    font-size: 20px;
    color: #868686;
    margin-right: 24px;
  }
`;

export const CloseIconStyles = styled(CloseIcon)`
  && {
    font-size: 20px;
    color: #868686;
  }
`;

export const ContentImage = styled("div")`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 16px;
    margin-bottom: 9px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primaryGreen};
    line-height: 19px;
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
