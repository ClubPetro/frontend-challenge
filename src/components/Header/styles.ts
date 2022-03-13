import styled from "styled-components";

export const Container = styled("div")`
  padding: 0 53px;
  background-color: ${({ theme }) => theme.colors.titleTop};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
