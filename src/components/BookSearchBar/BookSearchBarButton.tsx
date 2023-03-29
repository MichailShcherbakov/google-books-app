import { alpha, Button, styled } from "@mui/material";

export const BookSearchBarButton = styled(Button)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  flexShrink: 0,

  height: theme.spacing(6),

  padding: theme.spacing(1, 4),

  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",

    padding: 0,

    minWidth: theme.spacing(6),

    "& > .MuiTypography-root": {
      display: "none",
    },

    "& > .MuiButton-endIcon": {
      margin: 0,
    },
  },
}));
