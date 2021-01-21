import ReactSelect, { OptionTypeBase, Props } from 'react-select';

import * as S from './styles';

interface SelectProps extends Props<OptionTypeBase> {
  label: string;
}

export default function Select(props: SelectProps) {
  const { id, label } = props;

  return (
    <S.Wrapper>
      <label htmlFor={id}>{label}</label>
      <ReactSelect
        id={id}
        classNamePrefix="react-select"
        placeholder="Selecione..."
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'black',
          },
        })}
      />
    </S.Wrapper>
  );
}
