import styled from 'styled-components';
import Colors from '../../styles/colors';

const ButtonWrapper = styled.button`
    width: 203px;
    height: 49px;
    background: ${Colors.primaryColor};
    border-radius: 7px;
    border: 0;
    cursor: pointer;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;

    &:hover {
        background-color: ${Colors.primaryColorOnHover};
    }
`;

export default ButtonWrapper;
