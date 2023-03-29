import { styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export interface BookCardLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const BookCardLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  width: theme.spacing(28),
  height: "100%",

  padding: theme.spacing(3),

  gap: theme.spacing(2),

  cursor: "pointer",

  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "transparent",

  background: theme.palette.common.white,
  borderRadius: theme.spacing(1),

  "&:hover": {
    borderColor: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.06),
    borderRadius: theme.spacing(1),
  },
}));
