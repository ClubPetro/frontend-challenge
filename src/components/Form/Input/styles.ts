import styled, { css } from "styled-components";

interface Props {
  isBorder?: boolean | undefined;
}
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

export const InputStyles = styled("input")<Props>`
  height: 48px;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 12px;
  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.border};
    `}
`;
