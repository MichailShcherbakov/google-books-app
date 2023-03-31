import { CircularProgress, Stack } from "@mui/material";
import { useBooks, useCurrentBookSearchPattern } from "~/store/books/hooks";
import { BookGrid } from "../BookGrid";
import { BooksIndicator } from "../BooksIndicator";
import { LoadMoreBooksButton } from "../LoadMoreBooksButton";
import { BookNotFoundStub } from "./BookNotFoundStub";

export function BookContainer() {
  const { books, isLoading, isEmpty } = useBooks();
  const { pattern } = useCurrentBookSearchPattern();

  return (
    <Stack direction="column" alignItems="center" height="100%" gap={4}>
      {isLoading && <CircularProgress size="2rem" />}
      {!isLoading && isEmpty && <BookNotFoundStub pattern={pattern} />}
      {!isLoading && !isEmpty && (
        <>
          <BooksIndicator />
          <BookGrid books={books ?? []} />
          <LoadMoreBooksButton />
        </>
      )}
    </Stack>
  );
}
