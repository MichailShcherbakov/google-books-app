import { styled } from "@mui/material";

export interface BookSearchBarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const BookSearchBarLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 3),
  width: "100%",
  gap: theme.spacing(1),
}));
