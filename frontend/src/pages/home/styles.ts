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

        @media (max-width: 1024px) {
            flex-direction: column;
            padding: 32px 0;
            align-items: center;

            & > div {
                margin-bottom: 32px;
            }
        }
    }
`;

export const ScheduleSection = styled.section`
    max-width: 1440px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;

    & > h1 {
        margin-top: 48px;
        width: 700px;
        text-align: center;
        line-height: 60px;
    }

    & > div {
        margin-right: 30px;
        margin-top: 33px;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        align-items: center;

        & > div {
            margin-right: 0px;
        }
    }

    @media (min-width: 540px) and (max-width: 768px) {
        width: 560px;
    }

    @media (min-width: 768px) and (max-width: 1025px) {
        width: 840px;
    }
`;
