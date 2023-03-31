import { Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useCurrentBookSearchInfo } from "~/store/books/hooks";

export function BooksIndicator() {
  const { totalCount } = useCurrentBookSearchInfo();

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
