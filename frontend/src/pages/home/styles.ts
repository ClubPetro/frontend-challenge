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
        max-width: 1440px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const ScheduleSection = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
