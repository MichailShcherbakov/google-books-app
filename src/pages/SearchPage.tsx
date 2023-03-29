import { Stack } from "@mui/material";
import { AppBar } from "~/components/AppBar";
import { BookContainer } from "~/components/BookContainer";
import { SearchLayout } from "~/layouts/SearchLayout";

export function SearchPage() {
  return (
    <SearchLayout>
      <AppBar />
      <Stack direction="column" p={4}>
        <BookContainer />
      </Stack>
    </SearchLayout>
  );
}
