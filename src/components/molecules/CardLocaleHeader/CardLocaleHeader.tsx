import { Box, Typography } from '@material-ui/core';
import { CardHeader } from './styles';
import { CardLocaleAction } from '../../atoms/CardLocaleAction/CardLocaleAction';
import { ReactElement } from 'react';
import { PropsCardLocale } from '../CardLocale/CardLocale.interface';

export const CardLocaleHeader = ({
  item,
  indexPosition,
}: PropsCardLocale): ReactElement => {
  return (
    <CardHeader>
      <Box mb={2}>
        <img
          style={{ width: '56px', height: '34px' }}
          src={item.selectedCountry.flag}
        />
      </Box>
      <Typography variant='body1'>
        {item.selectedCountry?.translations?.br}
      </Typography>
      <CardLocaleAction item={item} indexPosition={indexPosition} />
    </CardHeader>
  );
};
