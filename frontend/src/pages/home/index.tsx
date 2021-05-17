import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import Button from '../../components/button';
import InputMaskComponent from '../../components/inputMask';
import SelectInput from '../../components/selectInput';
import TextInput from '../../components/textInput';
import { ScheduleContext } from '../../context/scheduleContext';
import {
    getCountriesFromApi,
    handleFormSubmit,
    handleSelectInputChange,
    handleTextInputChange,
} from './helper';
import { InputSection, Wrapper, ErrorMessage } from './styles';

const Home = (): React.ReactElement => {
    const { scheduleList, setScheduleList } = React.useContext(ScheduleContext);

    const [countryList, setCountryList] = React.useState<string[]>([]);
    const [formData, setFormData] = React.useState<ScheduleFormData>({
        country: '',
        location: '',
        date: '',
    });
    const [isThereError, setIsThereError] = React.useState<string>('');

    React.useEffect(() => {
        getCountriesFromApi(setCountryList);
    }, []);

    return (
        <Wrapper>
            <InputSection>
                <form
                    onSubmit={event =>
                        handleFormSubmit(
                            event,
                            setIsThereError,
                            formData,
                            setFormData,
                            scheduleList,
                            setScheduleList,
                        )
                    }
                >
                    <SelectInput
                        inputSize="medium"
                        options={countryList}
                        textLabel="País"
                        value={formData.country}
                        id="country"
                        onChange={event =>
                            handleSelectInputChange(
                                event,
                                formData,
                                setFormData,
                            )
                        }
                    />
                    <TextInput
                        inputSize="large"
                        textLabel="Local"
                        id="location"
                        placeholder="Digite o local que deseja conhecer"
                        value={formData.location}
                        onChange={event =>
                            handleTextInputChange(event, formData, setFormData)
                        }
                    />
                    <InputMaskComponent
                        inputSize="medium"
                        textLabel="Meta"
                        onChange={event =>
                            handleTextInputChange(event, formData, setFormData)
                        }
                        value={formData.date}
                        id="date"
                        placeholder="mês/ano"
                    />
                    <Button theme="primary" type="submit">
                        Adicionar
                    </Button>
                </form>
                {isThereError ? (
                    <ErrorMessage>
                        <FiAlertTriangle /> {isThereError}
                    </ErrorMessage>
                ) : null}
            </InputSection>
        </Wrapper>
    );
};

export default Home;
