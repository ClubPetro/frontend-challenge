import React from 'react';
import Button from '../../components/button';
import { InputSection, ScheduleSection, Wrapper } from './styles';

const Home = (): React.ReactElement => {
    return (
        <Wrapper>
            <InputSection>
                <main>
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
