import styled from 'styled-components';
import {Box, InputBase, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export const GreenBox = styled(Box)`
    background-color: #4F9419;
    width: 100%;
    padding: 50px 0px;
`

export const AlignContainer = styled.div`
    display: flex;
    align-items: center;
    width: 88%;
    height: 100%;
    padding: 0px 6%;

    @media(max-width: 800px){
        flex-direction: column;
        justify-content: center;
        padding: 0px 0px;
    }

`
export const SelectorField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;
    @media(max-width: 800px){
        width: 60% !important;
        justify-content: center;
        align-items: center;
        margin-right: 0px;
    }

`

export const CountrySelectorField = styled(SelectorField)`
    width: 25%;
    min-width: 150px;
`


export const CitySelectorField = styled(SelectorField)`
    width: 45%;
    min-width: 150px;
`

export const DateSelectorField = styled(SelectorField)`
    width: 20%;
    min-width: 100px;
`

export const SelectorLabel = styled.label`
    color: white;
    font-weight: 300;
`

export const CustomizedSelect = withStyles({
    root:{
        width: '100%',
        height: '41px',
        minWidth: '100px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '0px 0px',
        cursor: 'pointer',
        '& .MuiInputBase-root':{
            height: '100%',
        }
    },
    
    
})(TextField)

export const CustomizedButton = withStyles({
    root:{
        backgroundColor: '#006C18',
        color: '#fff',
        fontWeight: 400,
        padding: '10px 50px',
        textTransform: 'none',
        marginTop: '18px'
    }
})(Button)

export const CustomizedTextField = withStyles({
    root:{
        width: '100%'
    },
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 10px',
      }
})(InputBase);


export const MainTextField = withStyles((theme)=>({
    root:{
        width: '100%'
    },
    input: {
      width: '100%'
    }
}))(CustomizedTextField);


   
