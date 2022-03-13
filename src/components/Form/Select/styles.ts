import styled, { css } from "styled-components";
import { MenuItem, Select } from "@mui/material";

interface PropsLabel {
  isVisible?: boolean | undefined;
}

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const SelectStyles = styled(Select)`
  && {
    height: 48px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 7px;
    outline: none;
    border: none;
  }
`;

export const MenuItemStyles = styled(MenuItem)``;

export const LabelStyles = styled("label")<PropsLabel>`
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  margin-bottom: 3px;
  ${({ isVisible }) =>
    isVisible &&
    css`
      color: ${({ theme }) => theme.colors.titleTop};
    `}
`;
