import styled from 'styled-components';
import {Box, InputBase} from '@material-ui/core';
import Select from  '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export const GreenBox = styled(Box)`
    background-color: #4F9419;
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 15px 6%;
`
export const SelectorField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px

`


export const CitySelectorField = styled(SelectorField)`
    width: 30%;
`

export const SelectorLabel = styled.label`
    color: white;
    font-weight: 300;
`

export const CustomizedSelect = styled(Select)`
    width: 200px;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    cursor: pointer;

`

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

export const CustomizedTextField = withStyles((theme)=>({
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
      }
}))(InputBase);


export const MainTextField = withStyles((theme)=>({
    root:{
        width: '100%'
    },
    input: {
      width: '100%'
    }
}))(CustomizedTextField);


   
