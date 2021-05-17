import React from 'react';
import Button from '../../../components/button';
import InputMaskComponent from '../../../components/inputMask';
import SelectInput from '../../../components/selectInput';
import TextInput from '../../../components/textInput';
import { handleTextInputChange } from '../helper';
import Wrapper from './styles';

const ScheduleDetail = (): React.ReactElement => {
    const [formData, setFormData] = React.useState<ScheduleFormData>({
        country: '',
        date: '',
        location: '',
    });
    return (
        <Wrapper>
            <h1>Edite os detalhes de sua meta!</h1>
            <img src="https://restcountries.eu/data/bra.svg" alt="Brasil" />
            <form action="">
                <h3>País</h3>
                <SelectInput
                    id="country"
                    options={[]}
                    border
                    inputSize="large"
                />
                <h3>Local</h3>
                <TextInput inputSize="large" border />
                <h3>Meta</h3>
                <InputMaskComponent
                    value={formData.date}
                    inputSize="large"
                    id="date"
                    placeholder="mês/ano"
                    border
                    onChange={event =>
                        handleTextInputChange(event, formData, setFormData)
                    }
                />
                <Button theme="primary">Confirmar</Button>
                <Button theme="secondary">Cancelar</Button>
            </form>
        </Wrapper>
    );
};

export default ScheduleDetail;
