import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { useLoadMoreBooks } from "~/store/books/hooks";

export interface LoadMoreBooksButtonProps extends LoadingButtonProps {}

export function LoadMoreBooksButton(props: LoadMoreBooksButtonProps) {
  const { loadMoreBooks, hasNotLoadedBooks, isLoading } = useLoadMoreBooks();

  if (!hasNotLoadedBooks) return null;

  return (
    <LoadingButton
      {...props}
      variant="outlined"
      color="primary"
      fullWidth={false}
      startIcon={<BookOutlinedIcon />}
      loadingPosition="start"
      loading={isLoading}
      onClick={loadMoreBooks}
    >
      Load More
    </LoadingButton>
  );
}
