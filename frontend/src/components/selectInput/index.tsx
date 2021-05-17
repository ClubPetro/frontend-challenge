import React from 'react';
import Select from './styles';

interface SelectInputProps extends React.HTMLProps<HTMLSelectElement> {
    options: string[];
    textLabel?: string;
    border?: boolean;
    inputSize: 'medium' | 'large';
}

const SelectInput = ({
    options,
    textLabel,
    border,
    inputSize,
    ...props
}: SelectInputProps): React.ReactElement => {
    return (
        <Select border={border} inputSize={inputSize}>
            <p>{textLabel}</p>
            <select onChange={props.onChange} value={props.value} id={props.id}>
                <option value="">Selecione...</option>
                {options.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </Select>
    );
};

SelectInput.defaultProps = {
    textLabel: null,
    border: false,
};

export default SelectInput;
