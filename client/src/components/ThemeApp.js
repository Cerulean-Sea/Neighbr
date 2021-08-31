import { createTheme } from '@material-ui/core';

const clientColors = {
  blue: '#457F96',
  teal: '#32BCAC',
  yellow: '#E9C46A',
  orange: '#F4A261',
  red: '#E2522E',

}
const mainTheme = createTheme({
  palette: {
    common: {
      black: '#05090A'
    },
    primary: {
      main: clientColors.blue
    },
    secondary: {
      main: clientColors.teal
    },
    error: {
      main: clientColors.red
    },
    warning: {
      main: clientColors.orange
    },
    info: {
      main: '#FAD1B0'
    },
  },
  background: {
    paper: '#ffffff',
    default: '#FCF8EC'
  },
  overrides: {
    MuiCssBaseline: {
      '@global' : {
        html : {
          backgroundImage: 'url("./assets/landing-page.jpg")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
      }
    },
  }
});

export default mainTheme;