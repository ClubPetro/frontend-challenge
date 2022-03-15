import { Box, Typography } from '@material-ui/core';
import { CardHeader } from './styles';
import { CardLocaleAction } from '../../atoms/CardLocaleAction/CardLocaleAction';
import { ReactElement } from 'react';

export const CardLocaleHeader = (): ReactElement => {
  return (
    <CardHeader>
      <Box mb={2}>
        <img
          style={{ width: '56px', height: '34px' }}
          src='https://flagcdn.com/ax.svg'
        />
      </Box>
      <Typography variant='body1'>BRASIL</Typography>
      <CardLocaleAction />
    </CardHeader>
  );
};
