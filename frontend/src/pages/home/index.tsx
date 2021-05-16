import React from 'react';
import Button from '../../components/button';
import InputMaskComponent from '../../components/inputMask';
import ScheduleCard from '../../components/scheduleCard';
import SelectInput from '../../components/selectInput';
import TextInput from '../../components/textInput';
import { ScheduleContext } from '../../context/scheduleContext';
import {
    getCountriesFromApi,
    handleFormSubmit,
    handleSelectInputChange,
    handleTextInputChange,
} from './helper';
import { ErrorMessage, InputSection, ScheduleSection, Wrapper } from './styles';

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
                        onChange={event =>
                            handleTextInputChange(event, formData, setFormData)
                        }
                        value={formData.date}
                        id="date"
                        placeholder="mês/ano"
                    />
                    <Button type="submit">Adicionar</Button>
                </form>
            </InputSection>
            <ScheduleSection>
                {isThereError ? (
                    <ErrorMessage>{isThereError}</ErrorMessage>
                ) : null}
                {scheduleList.length > 0 ? (
                    scheduleList.map(item => (
                        <ScheduleCard
                            country={item.country}
                            date={item.date}
                            imgUri={item.flag}
                            key={item.id}
                            location={item.location}
                        />
                    ))
                ) : (
                    <h1>
                        Você não tem nenhuma meta para conhecer novos lugares!{' '}
                        <br /> Que tal criar uma nova?
                    </h1>
                )}
            </ScheduleSection>
        </Wrapper>
    );
};

export default Home;
