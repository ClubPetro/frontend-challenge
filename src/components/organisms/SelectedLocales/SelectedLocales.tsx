import { SelectedLocalesContainer } from './styles';
import { CardLocale } from '../../molecules/CardLocale/CardLocale';
import { ReactElement, useContext } from 'react';
import SelectedLocalesContext from '../../../context/SelectedLocalesContext/SelectedLocalesContext';

export const SelectedLocales = (): ReactElement => {
  const { selecteds } = useContext(SelectedLocalesContext);

  return (
    <SelectedLocalesContainer>
      {selecteds.map((value, index) => {
        return <CardLocale key={index} item={value} />;
      })}
    </SelectedLocalesContainer>
  );
};
