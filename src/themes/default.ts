import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
        },
        '#root': {
          position: 'relative',
          minHeight: '100vh',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#02C6EE',
    },
    secondary: {
      main: '#52C8B4',
    },
    error: {
      main: '#BA1A1A',
    },
    background: {
      default: 'white',
    },
  },
});

export default theme;
