import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const BookSearchInputIconLayout = styled("div")(({ theme }) => ({
  position: "absolute",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",

  pointerEvents: "none",

  color: grey[500],

  padding: theme.spacing(0, 2),
}));
