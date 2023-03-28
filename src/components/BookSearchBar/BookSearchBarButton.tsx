import { ButtonBase, styled } from "@mui/material";

export const BookSearchBarButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,

  padding: theme.spacing(0.5, 1),
}));
