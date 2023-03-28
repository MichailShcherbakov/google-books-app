import { Grid, GridProps } from "@mui/material";
import { useBooks } from "~/store/books/hooks";
import { BookCard } from "../BookCard";

export interface BookGridProps extends GridProps {}

export function BookGrid() {
  const { books } = useBooks();

  return (
    <Grid container spacing={2}>
      {books.map(book => (
        <Grid item key={book.id} xs={12} sm={6} md={3} lg={2}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
