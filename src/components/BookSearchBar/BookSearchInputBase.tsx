import { InputBase, styled } from "@mui/material";

export const BookSearchInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  width: "100%",
  height: "100%",

  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,

  padding: theme.spacing(0.5, 4),

  paddingLeft: `calc(1em + ${theme.spacing(4)})`,

  "& .MuiInputBase-input": {
    padding: theme.spacing(0),
  },

  "&:focus": {
    borderColor: theme.palette.primary.main,
  },
}));
