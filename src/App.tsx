import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { store } from "./store";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  );
}
