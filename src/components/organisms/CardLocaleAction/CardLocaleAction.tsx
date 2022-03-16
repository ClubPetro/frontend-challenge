import { SvgIcon } from '@material-ui/core';
import { CardAction } from './styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { ReactElement } from 'react';
import { useLocalesToVisit } from '../../../hooks/useLocalesToVisit/useLocalesToVisit';
import { useCountries } from '../../../hooks/useCountries/useCountries';
import { PropsCardLocale } from '../../molecules/CardLocale/CardLocale.interface';
import { ModalEdit } from '../../molecules/ModalEdit/ModalEdit';

export const CardLocaleAction = ({
  item,
  indexPosition,
}: PropsCardLocale): ReactElement => {
  const { countries } = useCountries();
  const { removeCountry } = useLocalesToVisit(countries);

  return (
    <CardAction>
      <SvgIcon fontSize={'small'} component={EditRoundedIcon} />
      <SvgIcon
        style={{ fontSize: '22px' }}
        component={CloseRoundedIcon}
        onClick={() => removeCountry(indexPosition)}
      />

      <ModalEdit item={item} indexPosition={indexPosition} />
    </CardAction>
  );
};
