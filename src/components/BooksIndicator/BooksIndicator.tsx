import Chip from "@mui/material/Chip/Chip";
import { alpha } from "@mui/material/styles";
import { useSelectBooksInfo } from "~/store/books/hooks";

export function BooksIndicator() {
  const { totalCount } = useSelectBooksInfo();

  return (
    <Chip
      variant="filled"
      label={`Found ${totalCount} results`}
      sx={theme => ({
        background: alpha(theme.palette.primary.main, 0.12),
        color: theme.palette.primary.main,
      })}
    />
  );
}
