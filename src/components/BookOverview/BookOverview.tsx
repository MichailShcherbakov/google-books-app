import { Container, Stack, Typography } from "@mui/material";
import { useCurrentBook } from "~/store/books/hooks/useCurrentBook";
import { BookThumbnail } from "../BookCard/BookThumbnail";
import { BookCategories } from "./BookCategories";
// @ts-ignore - @types/html-to-react still doesn't exist
import * as HtmlToReact from "html-to-react";
import { BookOverviewLayout } from "./BookOverviewLayout";

const htmlToReactParser = new HtmlToReact.Parser();

export function BookOverview() {
  const { book } = useCurrentBook();

  return (
    <Container>
      <BookOverviewLayout>
        <BookThumbnail
          src={book?.volumeInfo.imageLinks?.thumbnail}
          size="large"
        />
        <Stack direction="column" gap={6}>
          <BookCategories categories={book?.volumeInfo.categories ?? []} />
          <Stack direction="column" gap={1}>
            <Typography component="h1" variant="h4">
              {book?.volumeInfo.title}
            </Typography>
            <Typography component="h2" variant="body1">
              {book?.volumeInfo.authors?.join(", ")}
            </Typography>
          </Stack>
          <Typography component="span" variant="body1">
            {htmlToReactParser.parse(book?.volumeInfo.description)}
          </Typography>
        </Stack>
      </BookOverviewLayout>
    </Container>
  );
}
