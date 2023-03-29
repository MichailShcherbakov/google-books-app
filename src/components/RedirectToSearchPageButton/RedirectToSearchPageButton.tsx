import SearchIcon from "@mui/icons-material/Search";
import { Button, ButtonProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface RedirectToSearchPageButtonProps extends ButtonProps {}

export function RedirectToSearchPageButton(
  props: RedirectToSearchPageButtonProps,
) {
  const navigate = useNavigate();

  return (
    <Button
      {...props}
      variant="contained"
      color="primary"
      onClick={() => navigate("/")}
      sx={theme => ({
        width: theme.spacing(6),
        height: theme.spacing(5),

        display: "none",

        [theme.breakpoints.down("sm")]: {
          display: "inline-flex",
        },
      })}
    >
      <SearchIcon />
    </Button>
  );
}
