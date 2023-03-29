import { BookSearchBarButton } from "./BookSearchBarButton";
import {
  BookSearchBarLayout,
  BookSearchBarLayoutProps,
} from "./BookSearchBarLayout";
import { BookSearchInputBase } from "./BookSearchInputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  useCurrentBookSearchPattern,
  useRequestBooks,
} from "~/store/books/hooks";
import { Typography } from "@mui/material";
import { BookSearchInputIconLayout } from "./BookSearchInputIconLayout";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export interface BookSearchBarProps extends BookSearchBarLayoutProps {}

export function BookSearchBar(props: BookSearchBarProps) {
  const { requestBooks } = useRequestBooks();
  const { pattern, setPattern } = useCurrentBookSearchPattern();

  function changePatternHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPattern(e.target.value);
  }

  function requestBooksHandler() {
    requestBooks();
  }

  function keyUpHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") return;

    requestBooksHandler();
  }

  return (
    <BookSearchBarLayout {...props}>
      <BookSearchInputIconLayout>
        <SearchIcon />
      </BookSearchInputIconLayout>
      <BookSearchInputBase
        placeholder="Search…"
        value={pattern}
        onChange={changePatternHandler}
        onKeyUp={keyUpHandler}
      />
      <BookSearchBarButton
        onClick={requestBooksHandler}
        endIcon={
          <KeyboardBackspaceIcon
            sx={{
              transform: "rotate(180deg)",
            }}
          />
        }
      >
        <Typography
          variant="button"
          sx={{
            marginTop: "1px",
          }}
        >
          Search Books
        </Typography>
      </BookSearchBarButton>
    </BookSearchBarLayout>
  );
}
