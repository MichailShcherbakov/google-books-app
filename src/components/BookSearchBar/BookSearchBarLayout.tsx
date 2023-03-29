import { Box, BoxProps, styled } from "@mui/material";

export interface BookSearchBarLayoutProps extends BoxProps {
  /**
   * @default "medium"
   */
  size?: "small" | "medium";
}

export const BookSearchBarLayout = styled(Box, {
  shouldForwardProp: propName => propName !== "variant",
})<BookSearchBarLayoutProps>(({ theme, size = "medium" }) => ({
  position: "relative",

  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  width: theme.spacing(80),

  ...(size === "small" && {
    height: theme.spacing(5),
  }),

  ...(size === "medium" && {
    height: theme.spacing(6),
  }),

  gap: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    width: theme.spacing(70),
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
