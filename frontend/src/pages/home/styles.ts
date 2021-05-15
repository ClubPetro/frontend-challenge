import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
`;

export const InputSection = styled.section`
    background-color: ${Colors.brandColor};

    & > main {
        display: flex;
        padding: 73px 0px;
        max-width: 1000px;
        margin: 0 auto;
    }
`;

export const ScheduleSection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
