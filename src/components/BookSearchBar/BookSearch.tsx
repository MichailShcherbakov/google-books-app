import { BookSearchBarButton } from "./BookSearchBarButton";
import {
  BookSearchBarLayout,
  BookSearchBarLayoutProps,
} from "./BookSearchBarLayout";
import { BookSearchInputBase } from "./BookSearchInputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import { BookSearchInputIconLayout } from "./BookSearchInputIconLayout";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export interface BookSearchBarProps extends BookSearchBarLayoutProps {
  pattern: string;
  onPatternChange?: (pattern: string) => void;
  onBooksRequest?: (pattern: string) => void;
}

export function BookSearchBar({
  pattern,
  onPatternChange,
  onBooksRequest,
  ...props
}: BookSearchBarProps) {
  function changePatternHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onPatternChange?.(e.target.value);
  }

  function requestBooksHandler() {
    onBooksRequest?.(pattern);
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
        size={props.size}
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
          component="span"
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
