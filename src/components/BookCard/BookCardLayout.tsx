import { styled } from "@mui/material";

export interface BookCardLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const BookCardLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1.5),
  gap: theme.spacing(1.5),
}));
