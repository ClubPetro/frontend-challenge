import React from 'react';
import TextInputWrapper from './styles';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    textLabel?: string;
    inputSize: 'medium' | 'large';
    border?: boolean;
}

const TextInput = ({
    textLabel,
    inputSize,
    border,
    ...props
}: TextInputProps): React.ReactElement => {
    return (
        <TextInputWrapper inputSize={inputSize} border={border}>
            <label htmlFor={props.id}>
                <p>{textLabel}</p>
            </label>
            <input
                type="text"
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </TextInputWrapper>
    );
};

TextInput.defaultProps = {
    textLabel: null,
    border: false,
};

export default TextInput;
