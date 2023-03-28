import { styled } from "@mui/material";

export const BookThumbnail = styled("img")(({ theme }) => ({
  width: theme.spacing(16),
  height: theme.spacing(24),
  borderRadius: theme.spacing(1),
}));
