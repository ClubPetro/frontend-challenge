import React, { FormEvent } from 'react';
import Button from '../../components/button';
import InputMaskComponent from '../../components/inputMask';
import ScheduleCard from '../../components/scheduleCard';
import SelectInput from '../../components/selectInput';
import TextInput from '../../components/textInput';
import { ScheduleContext } from '../../context/scheduleContext';
import { getCountriesFromApi } from './helper';
import { InputSection, ScheduleSection, Wrapper } from './styles';

const Home = (): React.ReactElement => {
    const { scheduleList, setScheduleList } = React.useContext(ScheduleContext);

    const [countryList, setCountryList] = React.useState<string[]>([]);
    const [formData, setFormData] = React.useState<ScheduleFormData>({
        country: '',
        location: '',
        date: '',
    });

    React.useEffect(() => {
        getCountriesFromApi(setCountryList);
    }, []);

    function handleTextInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    function handleSelectInputChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const country = e.target.value;
        setFormData({ ...formData, country });
    }

    function handleFormSubmit(e: FormEvent) {
        e.preventDefault();

        console.log(formData);
    }

    return (
        <Wrapper>
            <InputSection>
                <form onSubmit={handleFormSubmit}>
                    <SelectInput
                        options={countryList}
                        textLabel="País"
                        value={formData.country}
                        onChange={handleSelectInputChange}
                    />
                    <TextInput
                        inputSize="large"
                        textLabel="Local"
                        id="location"
                        placeholder="Digite o local que deseja conhecer"
                        value={formData.location}
                        onChange={handleTextInputChange}
                    />
                    <InputMaskComponent
                        onChange={handleTextInputChange}
                        value={formData.date}
                        id="date"
                        placeholder="mês/ano"
                    />
                    <Button type="submit">Adicionar</Button>
                </form>
            </InputSection>
            <ScheduleSection>
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
