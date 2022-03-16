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
    subtitle1: {
      color: '#FFFFFF',
      fontWeight: 400,
      // [breakpoints.up('md')]: {
      //   fontSize: '1rem',
      // },
      // [breakpoints.between('sm', 'md')]: {
      //   fontSize: '0.725rem',
      // },
      // [breakpoints.down('sm')]: {
      //   fontSize: '.07rem',
      // },
    },
    subtitle2: {
      color: '#000000',
      fontWeight: 400,
    },
    body1: {
      color: '#4F9419',
      fontWeight: 700,
    },
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: '7px',
        width: '100%',
        maxWidth: '203px',
        padding: '13px 20px',
        minWidth: 'unset',
        textTransform: 'none',
      },
      contained: {
        backgroundColor: '#006C18',
        color: '#FFFFFF',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          color: '#006C18',
        },
      },
    },

    MuiInputBase: {
      root: {
        background: '#F2F4FB',
        color: '#111232',
        width: '100%',
        borderRadius: '8px',
        padding: '8px 14px',
        marginTop: '0px',
        marginBottom: '0px',
        fontSize: '16px',
        fontWeight: 400,
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

    MuiTextField: {
      root: {
        borderRadius: '8px',
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input':
          {
            padding: '6px 4px',
          },
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
        '& .MuiFormLabel-root ': {
          color: '#00000099',
          fontWeight: 400,
        },
        '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused.Mui-focused': {
          display: 'none',
        },
        '& .PrivateNotchedOutline-root-11.MuiOutlinedInput-notchedOutline': {
          display: 'none',
          backgroundColor: 'red',
        },
        '& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-outlined.MuiFormLabel-filled':
          {
            display: 'none',
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

    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions, ptBR);
