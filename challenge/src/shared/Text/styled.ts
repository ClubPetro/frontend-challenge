import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

interface TextProps {
  size?: string | number;
}

const TEXT_MODIFIERS = {
  // body: () => 'font-size: 1.6rem;',
  // bodyNormal: () => 'font-size: 1.6rem; font-weight: normal;',
  bodyBold: () => 'font-size: 1.6rem; font-weight: bold;',

  green: () => 'color: #4F9419',
  gray: () => 'color: #868686',
  black: () => 'color: #363636',
  white: () => 'color: #fff',
};

export const Text = styled.p<TextProps>`
  font-size: 1.6rem;
  font-weight: normal;

  ${({ size }) =>
    size &&
    ` font-size: ${size}rem!important;
    `}

  color: #000000;
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;
