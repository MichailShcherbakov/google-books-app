import { Stack } from "@mui/material";
import { AppBar } from "~/components/AppBar";
import { BookGrid } from "~/components/BookGrid";
import { BooksIndicator } from "~/components/BooksIndicator";
import { LoadMoreBooksButton } from "~/components/LoadMoreBooksButton";

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
        gap={4}
      >
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <BooksIndicator />
        </Stack>
        <BookGrid />
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <LoadMoreBooksButton />
        </Stack>
      </Stack>
    </Stack>
  );
}
