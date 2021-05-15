import React from 'react';
import TextInputWrapper from './styles';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    textLabel?: string;
    inputSize: 'medium' | 'large';
}

const TextInput = ({
    textLabel,
    value,
    inputSize,
}: TextInputProps): React.ReactElement => {
    return (
        <TextInputWrapper inputSize={inputSize}>
            <p>{textLabel}</p>
            <input type="text" value={value} />
        </TextInputWrapper>
    );
};

TextInput.defaultProps = {
    textLabel: null,
};

export default TextInput;
