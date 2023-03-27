import { ButtonBase, ButtonBaseProps, styled, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

export const FilterBarButtonIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "center",

  width: theme.spacing(4),
  height: theme.spacing(4),
}));

export const FilterBarButtonBase = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  borderRadius: theme.shape.borderRadius,

  padding: theme.spacing(0.5, 2, 0.5, 1),

  gap: theme.spacing(1),
}));

export interface FilterBarButton extends ButtonBaseProps {}

export function FilterBarButton(props: FilterBarButton) {
  return (
    <FilterBarButtonBase {...props}>
      <FilterBarButtonIconWrapper>
        <FilterAltOutlinedIcon />
      </FilterBarButtonIconWrapper>
      <Typography component="span" variant="body2">
        Filters
      </Typography>
    </FilterBarButtonBase>
  );
}
