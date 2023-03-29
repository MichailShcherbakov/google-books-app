import { styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export interface BookCardLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const BookCardLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  width: "100%",
  height: "100%",

  padding: theme.spacing(1.5),

  gap: theme.spacing(1.5),

  cursor: "pointer",

  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "transparent",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.06),
    borderRadius: theme.spacing(1),
  },
}));
