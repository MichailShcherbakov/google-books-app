import { Stack, Typography } from "@mui/material";
import { Book } from "~/store/books/type";
import { BookThumbnail } from "./BookThumbnail";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { BookCardSection } from "./BookCardSection";
import { BookCardLayout, BookCardLayoutProps } from "./BookCardLayout";

export interface BookCards extends BookCardLayoutProps {
  book: Book;
}

export function BookCard({ book, ...props }: BookCards) {
  return (
    <BookCardLayout {...props}>
      <BookThumbnail
        src={book.volumeInfo.imageLinks?.smallThumbnail}
        alt="book thumbnail"
      />
      <Typography component="p" variant="body1" width="100%" noWrap>
        {book.volumeInfo.title}
      </Typography>
      <Stack
        direction="column"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
        gap={1}
      >
        {!!book.volumeInfo.authors?.length && (
          <BookCardSection
            icon={<EditOutlinedIcon fontSize="small" />}
            label={book.volumeInfo.authors.join(", ")}
          />
        )}
        {!!book.volumeInfo.categories?.length && (
          <BookCardSection
            icon={<ClassOutlinedIcon fontSize="small" />}
            label={book.volumeInfo.categories.at(0) ?? ""}
          />
        )}
        {!!book.volumeInfo.pageCount && (
          <BookCardSection
            icon={<AutoStoriesOutlinedIcon fontSize="small" />}
            label={`${book.volumeInfo.pageCount} Pages`}
          />
        )}
      </Stack>
    </BookCardLayout>
  );
}
