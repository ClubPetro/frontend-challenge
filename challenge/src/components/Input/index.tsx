import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Input(props: InputProps) {
  const { id, label, ...rest } = props;

  const [input, { error, touched }] = useField({ id, ...rest });

  return (
    <S.Wrapper error={!!error && touched}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...input} {...rest} />
      {error && touched && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  );
}
