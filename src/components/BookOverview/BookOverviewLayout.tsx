import { Box, styled } from "@mui/material";

export const BookOverviewLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),
  padding: theme.spacing(4, 2),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(6),
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0),
  },
}));
