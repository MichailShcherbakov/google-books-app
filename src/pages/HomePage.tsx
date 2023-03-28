import { Stack } from "@mui/material";
import { AppBar } from "~/components/AppBar";
import { BookGrid } from "~/components/BookGrid";

export function HomePage() {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <AppBar />
      <Stack
        sx={theme => ({
          padding: theme.spacing(4),
        })}
      >
        <BookGrid />
      </Stack>
    </Stack>
  );
}
