import { SvgIcon } from '@material-ui/core';
import { CardAction } from './styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { ReactElement } from 'react';

export const CardLocaleAction = (): ReactElement => {
  return (
    <CardAction>
      <SvgIcon fontSize={'small'} component={EditRoundedIcon} />
      <SvgIcon style={{ fontSize: '22px' }} component={CloseRoundedIcon} />
    </CardAction>
  );
};
