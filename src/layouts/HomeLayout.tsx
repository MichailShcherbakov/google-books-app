import { styled } from "@mui/material";

export const HomeLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  width: "100vw",
  height: "100vh",

  overflow: "hidden",

  gap: theme.spacing(4),

  padding: theme.spacing(12, 4, 0, 4),
}));
