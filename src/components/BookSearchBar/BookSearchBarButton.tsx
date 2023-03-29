import { alpha, Button, ButtonProps, styled } from "@mui/material";

export interface BookSearchBarLayoutProps extends ButtonProps {
  /**
   * @default "medium"
   */
  size?: "small" | "medium";
}

export const BookSearchBarButton = styled(Button, {
  shouldForwardProp: propName => propName !== "size",
})<BookSearchBarLayoutProps>(({ theme, size }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  flexShrink: 0,

  height: "100%",

  padding: theme.spacing(1, 4),

  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },

  ...(size === "small" && {
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
  }),

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
