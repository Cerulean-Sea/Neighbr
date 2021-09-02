import { createTheme } from '@material-ui/core';

// These colors from Mediterranian Sunset Palette.
// Can add more if we need.
const clientColors = {
  blue: '#264653',
  teal: '#2A9D8F',
  yellow: '#E9C46A',
  orange: '#F4A261',
  red: '#E76F51',
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

          //Commented out here due to background overflow issues on homepage Views

          // backgroundImage: 'url("./assets/landing-page.jpg")',
          // backgroundAttachment: 'fixed',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
        }
      }
    },
  }
});

export default mainTheme;