import SearchIcon from "@mui/icons-material/Search";
import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/router";

export interface RedirectToSearchPageButtonProps extends ButtonProps {}

export function RedirectToSearchPageButton(
  props: RedirectToSearchPageButtonProps,
) {
  const router = useRouter();

  return (
    <Button
      {...props}
      variant="contained"
      color="primary"
      onClick={() => router.push("/")}
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
