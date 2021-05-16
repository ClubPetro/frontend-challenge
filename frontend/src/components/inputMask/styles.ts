import styled from 'styled-components';
import Colors from '../../styles/colors';

const Wrapper = styled.div`
    & > p {
        color: #ffffff;
        margin-bottom: 3px;
        padding-left: 2px;
    }

    & > input {
        width: 238px;
        height: 48px;
        background: #ffffff;
        border-radius: 7px;
        border: 0;
        padding: 18px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.grayColors.gray1};

        @media (max-width: 1024px) {
            width: 250px;
        }
    }
`;

export default Wrapper;
