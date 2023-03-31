import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const HomeLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  width: "100%",
  height: "100%",

  overflow: "hidden",

  gap: theme.spacing(4),

  padding: theme.spacing(12, 4, 0, 4),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(12, 2, 0, 2),
  },
}));
