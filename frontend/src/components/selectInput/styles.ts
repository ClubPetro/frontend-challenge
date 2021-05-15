import styled from 'styled-components';
import Colors from '../../styles/colors';

const Select = styled.div`
    & > p {
        color: #ffffff;
        margin-bottom: 3px;
        padding-left: 2px;
    }
    & > select {
        width: 303px;
        height: 48px;
        background: #ffffff;
        border-radius: 7px;
        border: 0;
        padding: 15px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.grayColors.gray1};

        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        background: url('/images/arrow-down-stroke-icon.png') #ffffff;
        background-repeat: no-repeat;
        background-size: 11.12px 7.29px;
        background-position: 95% center;

        @media (max-width: 1024px) {
            width: 250px;
        }
    }
`;

export default Select;
