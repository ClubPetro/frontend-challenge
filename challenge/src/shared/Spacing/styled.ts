import styled from 'styled-components';

interface SpacingProps {
  m?: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  padding?: string;
  display?: string;
  width?: string;
}

export const Spacing = styled.div<SpacingProps>`
  ${({ m }) => (m ? `margin: ${m}` : ``)};
  ${({ mt }) => (mt ? `margin-top: ${mt}rem;` : ``)}
  ${({ mr }) => (mr ? `margin-right: ${mr}rem;` : ``)}
  ${({ mb }) => (mb ? `margin-bottom: ${mb}rem;` : ``)}
  ${({ ml }) => (ml ? `margin-left: ${ml}rem;` : ``)}
  ${({ padding }) => (padding ? `margin: ${padding}` : ``)};
  ${({ display }) => (display ? `display: ${display}` : ``)};
  ${({ width }) => (width ? `width: ${width};` : ``)}
`;
