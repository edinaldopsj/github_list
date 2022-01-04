import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';

const baseTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const theme = createTheme(
  {
    overrides: {
      MuiButton: {
        contained: {
          width: 120,
          height: 55,
        },
      },
      MuiTooltip: {
        tooltip: {
          fontSize: '1em',
          border: '1px solid #58a6ff',
        },
      },
      MuiInputLabel: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
  baseTheme,
);

export default theme;
