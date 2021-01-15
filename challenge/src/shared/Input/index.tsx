import React from 'react';
import * as S from './styled';

interface InputProps {
  select?: boolean;
  label?: string;
  placeholder?: string;
  mask?: any;
  options?: string[];
}
const Input: React.FC<InputProps> = ({
  select,
  label,
  placeholder,
  mask,
  options,
}) => {
  return (
    <>
      {select ? (
        <S.ContainerInput>
          <S.Label>{label}</S.Label>
          <S.Select name="select">
            <option value="selected" selected>
              Selecione...
            </option>
            {options !== undefined ? (
              options.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <></>
            )}
          </S.Select>
        </S.ContainerInput>
      ) : (
        <S.ContainerInput>
          <S.Label>{label}</S.Label>
          <S.Input type="text" mask={mask} placeholder={placeholder} />
        </S.ContainerInput>
      )}
    </>
  );
};
export default Input;
