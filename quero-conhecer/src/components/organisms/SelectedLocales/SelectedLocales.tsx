import { Box, SvgIcon, Typography } from '@material-ui/core';
import {
  CardLocale,
  SelectedLocalesContainer,
  CardHeader,
  CardContent,
  CardAction,
} from './styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

export const SelectedLocales = () => {
  return (
    <SelectedLocalesContainer>
      <CardLocale>
        <CardHeader>
          <Box mb={2}>
            <img
              style={{ width: '56px', height: '34px' }}
              src='https://flagcdn.com/ax.svg'
            />
          </Box>
          <Typography variant='body1'>BRASIL</Typography>
          <CardAction>
            <SvgIcon fontSize={'small'} component={EditRoundedIcon} />
            <SvgIcon
              style={{ fontSize: '22px' }}
              component={CloseRoundedIcon}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <Typography variant='subtitle2'>Locale: Mococa</Typography>
          <Typography variant='subtitle2'>Meta: 04/2022</Typography>
        </CardContent>
      </CardLocale>
    </SelectedLocalesContainer>
  );
};
