import { Stack } from "@mui/material";
import { BookGrid } from "~/components/BookGrid";
import { BookSearchBar } from "~/components/BookSearchBar";
import { LoadMoreBooksButton } from "~/components/LoadMoreBooksButton";
import { Logo } from "~/components/Logo";

export function HomePage() {
  return (
    <Stack
      direction="column"
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      gap={2}
    >
      <Logo />
      <Stack
        sx={theme => ({
          padding: theme.spacing(2),
        })}
        gap={4}
      >
        <BookSearchBar />
      </Stack>
    </Stack>
  );
}
