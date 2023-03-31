import { CircularProgress, Stack } from "@mui/material";
import { useBooks, useCurrentBookSearchPattern } from "~/store/books/hooks";
import { BookGrid } from "../BookGrid";
import { BooksIndicator } from "../BooksIndicator";
import { LoadMoreBooksButton } from "../LoadMoreBooksButton";
import { BooksNotFoundStub } from "./BooksNotFoundStub";
import { BookSearchErrorStub } from "./BookSearchErrorStub";

export function BookContainer() {
  const { books, isLoading, isEmpty, isError } = useBooks();
  const { pattern } = useCurrentBookSearchPattern();

  const showLoading = isLoading;
  const showErrorStub = !isLoading && isError;
  const showEmptyStub = !isLoading && !isError && isEmpty;
  const showBooks = !isLoading && !isError && !isEmpty;

  return (
    <Stack direction="column" alignItems="center" height="100%" gap={4}>
      {showLoading && <CircularProgress size="2rem" />}
      {showErrorStub && <BookSearchErrorStub />}
      {showEmptyStub && <BooksNotFoundStub pattern={pattern} />}
      {showBooks && (
        <>
          <BooksIndicator />
          <BookGrid books={books ?? []} />
          <LoadMoreBooksButton />
        </>
      )}
    </Stack>
  );
}
