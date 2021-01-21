import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input(props: InputProps) {
  const { id, label, ...rest } = props;

  return (
    <S.Wrapper>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
    </S.Wrapper>
  );
}
