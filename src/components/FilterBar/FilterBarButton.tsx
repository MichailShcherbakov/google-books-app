import { alpha, Button, ButtonProps, styled, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

export const FilterBarButtonIconLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "center",

  width: theme.spacing(4),
  height: theme.spacing(4),
}));

export const FilterBarButtonBase = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  height: theme.spacing(5),

  minWidth: theme.spacing(6),

  borderRadius: theme.shape.borderRadius,

  padding: theme.spacing(0.5, 2, 0.5, 1),

  gap: theme.spacing(1),

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },

  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    justifyContent: "center",

    padding: 0,
  },
}));

export interface FilterBarButton extends ButtonProps {}

export function FilterBarButton(props: FilterBarButton) {
  return (
    <FilterBarButtonBase {...props}>
      <FilterBarButtonIconLayout>
        <FilterAltOutlinedIcon fontSize="small" />
      </FilterBarButtonIconLayout>
      <Typography
        component="span"
        variant="button"
        sx={theme => ({
          marginTop: "1px",

          [theme.breakpoints.down("lg")]: {
            display: "none",
          },
        })}
      >
        Filters
      </Typography>
    </FilterBarButtonBase>
  );
}
