import React from 'react';
import Button from '../../components/button';
import ScheduleCard from '../../components/scheduleCard';
import SelectInput from '../../components/selectInput';
import TextInput from '../../components/textInput';
import { InputSection, ScheduleSection, Wrapper } from './styles';

const Home = (): React.ReactElement => {
    return (
        <Wrapper>
            <InputSection>
                <main>
                    <SelectInput
                        options={['Brasil', 'Portugal']}
                        textLabel="País"
                    />
                    <TextInput inputSize="large" textLabel="Local" />
                    <TextInput inputSize="medium" textLabel="Meta" />
                    <Button>Adicionar</Button>
                </main>
            </InputSection>
            <ScheduleSection>
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                {/* <h1>
                    Você não tem nenhuma meta para conhecer novos lugares!{' '}
                    <br /> Que tal criar uma nova?
                </h1> */}
            </ScheduleSection>
        </Wrapper>
    );
};

export default Home;
