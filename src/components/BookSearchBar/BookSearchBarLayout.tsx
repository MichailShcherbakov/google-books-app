import { styled } from "@mui/material";

export interface BookSearchBarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const BookSearchBarLayout = styled("div")(({ theme }) => ({
  position: "relative",

  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  width: theme.spacing(80),

  gap: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    width: theme.spacing(70),
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
