import { ThemeOptions, createTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const themeOptions: ThemeOptions = {
  palette: {
    divider: '#ABABAB',
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#4F9419',
      hint: '#868686',
    },
    primary: {
      main: '#4F9419',
      contrastText: '#fff',
      dark: '#006C18',
    },
  },

  typography: {
    h1: {
      [breakpoints.up('md')]: {
        fontSize: '3.5rem' /* 56px */,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: '2.4rem',
      },
      [breakpoints.down('sm')]: {
        fontSize: '1.8rem',
      },
    },
  },

  overrides: {
    

    MuiInputBase: {
      root: {
        background: '#F2F4FB',
        color: '#111232',
        width: '100%',
        borderRadius: '8px',
        padding: '8px 14px',
        marginTop: '8px',
        marginBottom: '8px',
        fontSize: '16px',
        '&:before': {
          display: 'none',
        },
        '&:after': {
          display: 'none',
        },
        '&:hover': {
          outline: 'none',
        },
      },
      input: {
        '&::placeholder': {
          color: '#6E7384',
          opacity: '1',
        },
        '&::-webkit-input-placeholder': {
          color: '#6E7384',
          opacity: '1',
        },
        '&::-moz-placeholder': {
          color: '#6E7384',
          opacity: '1',
        },
        '&:-ms-input-placeholder': {
          color: '#6E7384',
          opacity: '1',
        },
        '&:-moz-placeholder': {
          color: '#6E7384',
          opacity: '1',
        },
        '&:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 30px white inset !important',
        },
        '&:-webkit-autofill:hover': {
          '-webkit-box-shadow': '0 0 0 30px white inset !important',
        },
        '&:-webkit-autofill:focus': {
          '-webkit-box-shadow': '0 0 0 30px white inset !important',
        },
        '&:-webkit-autofill:active': {
          '-webkit-box-shadow': '0 0 0 30px white inset !important',
        },
      },
    },

    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'unset',
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions, ptBR);
