import React from 'react';
import InputMask from 'react-input-mask';
import Wrapper from './styles';

interface InputMaskProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
}

const InputMaskComponent = ({
    onChange,
    value,
    id,
}: InputMaskProps): React.ReactElement => {
    return (
        <Wrapper>
            <p>Meta</p>
            <InputMask
                mask="99/9999"
                onChange={onChange}
                value={value}
                id={id}
            />
        </Wrapper>
    );
};

export default InputMaskComponent;
