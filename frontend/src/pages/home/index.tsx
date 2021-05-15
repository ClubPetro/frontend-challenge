import React from 'react';
import Button from '../../components/button';
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
                <p>schedule</p>
                <p>schedule</p>
            </ScheduleSection>
        </Wrapper>
    );
};

export default Home;
