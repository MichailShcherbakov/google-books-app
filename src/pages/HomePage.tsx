import { Stack } from "@mui/material";
import { AppBar } from "~/components/AppBar";

export function HomePage() {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <AppBar />
    </Stack>
  );
}
