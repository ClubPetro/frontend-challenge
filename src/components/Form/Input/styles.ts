import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

interface PropsLabel {
  isVisible?: boolean | undefined;
}
export const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

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

export const InputStyles = styled("input")`
  height: 48px;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const InputMaskStyles = styled(InputMask).attrs({
  mask: "99/9999",
})`
  height: 48px;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
