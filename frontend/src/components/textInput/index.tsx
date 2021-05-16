import React from 'react';
import TextInputWrapper from './styles';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    textLabel?: string;
    inputSize: 'medium' | 'large';
}

const TextInput = ({
    textLabel,
    inputSize,
    ...props
}: TextInputProps): React.ReactElement => {
    return (
        <TextInputWrapper inputSize={inputSize}>
            <p>{textLabel}</p>
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
};

export default TextInput;
