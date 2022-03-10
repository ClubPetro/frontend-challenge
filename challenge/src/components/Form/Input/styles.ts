import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const LabelStyles = styled("label")`
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  margin-bottom: 3px;
`;

export const InputStyles = styled("input")`
  height: 48px;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 12px;
`;
