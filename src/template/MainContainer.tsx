import { Container } from '@material-ui/core';
import React, { ReactElement } from 'react';

type Props = {
  children: JSX.Element;
};

export const MainContainer = ({ children }: Props): ReactElement => {
  return <Container maxWidth='sm'>{children}</Container>;
};
