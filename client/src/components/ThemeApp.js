import { createTheme } from '@material-ui/core';

// These colors from Mediterranian Sunset Palette.
// Can add more if we need.
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
      // darker shade of clientColor.blue
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
    // This will override any CSS resets established by CssBaseline wrapper component
    MuiCssBaseline: {
      '@global' : {
        html : {
          // playing around with background image overrides.
          // Revisit during stretch for animated ideas. Think Roku screensaver.
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