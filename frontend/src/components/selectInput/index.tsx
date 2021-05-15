import React from 'react';
import Select from './styles';

interface SelectInputProps extends React.HTMLProps<HTMLSelectElement> {
    options: string[];
    textLabel?: string;
}

const SelectInput = ({
    options,
    textLabel,
    ...props
}: SelectInputProps): React.ReactElement => {
    return (
        <Select>
            <p>{textLabel}</p>
            <select onChange={props.onChange} value={props.value}>
                <option value="">Selecione...</option>
                {options.map(item => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </Select>
    );
};

SelectInput.defaultProps = {
    textLabel: null,
};

export default SelectInput;
