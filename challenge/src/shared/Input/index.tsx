import React from 'react';
import * as S from './styled';

interface InputProps {
  select?: boolean;
  name?: string;
  label?: string;
  colorLabel?: string;
  placeholder?: string;
  mask?: any;
  options?: string[];
  onChange?: (value: any) => void;
  onBlur?: (value: any) => void;
  value?: any;
  border?: boolean;
}
const Input: React.FC<InputProps> = ({
  select,
  name,
  label,
  colorLabel,
  placeholder,
  mask,
  options,
  onChange,
  onBlur,
  value,
  border,
}) => {
  return (
    <>
      {select ? (
        <S.ContainerInput>
          <S.Label>{label}</S.Label>
          <S.Select
            border={border}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Selecione..."
            data-cy={name}
          >
            <option value="">Selecione...</option>
            {options !== undefined ? (
              options.map((item: any) => (
                <option key={item} value={item.name}>
                  {item.translations.br}
                </option>
              ))
            ) : (
              <></>
            )}
          </S.Select>
        </S.ContainerInput>
      ) : (
        <S.ContainerInput>
          <S.Label color={colorLabel}>{label}</S.Label>
          <S.Input
            border={border}
            type="text"
            name={name}
            mask={mask}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            data-cy={name}
          />
        </S.ContainerInput>
      )}
    </>
  );
};
export default Input;
