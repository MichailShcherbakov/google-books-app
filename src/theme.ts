import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0266FF",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h6: {
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
      defaultProps: {
        sx: theme => ({
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: theme.palette.divider,
          borderRadius: theme.spacing(1),
          boxShadow: "0 0 10px 2px rgba(0,0,0,0.08);",
        }),
      },
    },
  },
});
