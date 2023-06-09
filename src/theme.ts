import { alpha, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0266FF",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      lineHeight: "normal",
    },
    h6: {
      fontWeight: 500,
      lineHeight: "normal",
    },
    body2: {
      lineHeight: "normal",
    },
    button: {
      textTransform: "none",
      lineHeight: "normal",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: theme.palette.divider,
          borderRadius: theme.spacing(1),
          boxShadow: "0 0 10px 2px rgba(0,0,0,0.08);",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: theme.spacing(6),
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",

            "&.MuiButton-containedPrimary": {
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
            },
          },

          "&:active": {
            boxShadow: "none",
          },
        }),
      },
    },
  },
});
