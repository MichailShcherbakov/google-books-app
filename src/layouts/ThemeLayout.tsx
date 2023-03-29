import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "~/theme";

export interface ThemeLayout {
  children?: React.ReactElement;
}

export function ThemeLayout({ children }: ThemeLayout) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
