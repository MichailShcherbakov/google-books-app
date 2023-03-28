import { InputBase, styled } from "@mui/material";

export const BookSearchInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  width: "100%",
  height: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0),
  },
}));
