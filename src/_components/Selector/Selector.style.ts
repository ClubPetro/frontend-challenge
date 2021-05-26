import styled from 'styled-components';
import {Box} from '@material-ui/core';
import Select from  '@material-ui/core/Select';


export const GreenBox = styled(Box)`
    background-color: #4F9419;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 6%
`
export const SelectorField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

`

export const SelectorLabel = styled.label`
    color: white;
    font-weight: 300;
`

export const CustomizedSelect = styled(Select)`
    width: 200px;

`