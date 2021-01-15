import React, { CSSProperties } from 'react';
import * as S from './styled';

interface SpacingProps {
  m?: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  padding?: string;
  display?: string;
  width?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Spacing: React.FC<SpacingProps> = ({
  m,
  mt,
  mr,
  mb,
  ml,
  padding,
  display,
  width,
}) => (
  <S.Spacing
    m={m}
    mt={mt}
    mr={mr}
    mb={mb}
    ml={ml}
    padding={padding}
    display={display}
    width={width}
  />
);

export default Spacing;
