import React from 'react';
import InputMask from 'react-input-mask';
import Wrapper from './styles';

interface InputMaskProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    placeholder: string;
    border?: boolean;
    textLabel?: string;
    inputSize: 'medium' | 'large';
}

const InputMaskComponent = ({
    onChange,
    value,
    id,
    border,
    inputSize,
    textLabel,
    placeholder,
}: InputMaskProps): React.ReactElement => {
    return (
        <Wrapper border={border} inputSize={inputSize}>
            {textLabel ? <p>{textLabel}</p> : null}
            <InputMask
                mask="99/9999"
                onChange={onChange}
                value={value}
                id={id}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};

InputMaskComponent.defaultProps = {
    border: false,
    textLabel: '',
};

export default InputMaskComponent;
