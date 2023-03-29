import { Grid, GridProps } from "@mui/material";
import { Book } from "~/store/books/type";
import { BookCard } from "../BookCard";

export interface BookGridProps extends GridProps {
  books: Book[];
}

export function BookGrid({ books, ...props }: BookGridProps) {
  return (
    <Grid {...props} container spacing={2}>
      {books.map(book => (
        <Grid item key={book.etag} xs={12} sm={6} md={3} lg={2}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
