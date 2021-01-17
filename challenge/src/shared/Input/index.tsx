import React from 'react';
import * as S from './styled';

interface InputProps {
  select?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  mask?: any;
  options?: string[];
  onChange?: (value: any) => void;
  onBlur?: (value: any) => void;
  value?: any;
}
const Input: React.FC<InputProps> = ({
  select,
  name,
  label,
  placeholder,
  mask,
  options,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <>
      {select ? (
        <S.ContainerInput>
          <S.Label>{label}</S.Label>
          <S.Select
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Selecione..."
          >
            <option value="">Selecione...</option>
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
          <S.Input
            type="text"
            name={name}
            mask={mask}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        </S.ContainerInput>
      )}
    </>
  );
};
export default Input;
