import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeLayout } from "./layouts/ThemeLayout";
import { router } from "./router";
import { store } from "./store";

export default function App() {
  return (
    <ThemeLayout>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeLayout>
  );
}
