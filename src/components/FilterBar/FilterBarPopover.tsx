import { Popover, PopoverProps, Stack, Typography } from "@mui/material";
import { CategoryFilterSelect } from "./CategoryFilterSelect";
import { SortBySelect } from "./SortBySelect";

export interface FilterBarPopoverProps
  extends Omit<PopoverProps, "anchorOrigin" | "transformOrigin"> {}

export function FilterBarPopover(props: FilterBarPopoverProps) {
  return (
    <Popover
      {...props}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Stack
        direction="column"
        gap={3}
        sx={theme => ({
          width: theme.spacing(44),
          padding: theme.spacing(3),

          [theme.breakpoints.down("sm")]: {
            width: theme.spacing(32),
          },
        })}
      >
        <Typography component="p" variant="h6">
          Filters
        </Typography>
        <Stack direction="column" gap={2}>
          <CategoryFilterSelect />
          <SortBySelect />
        </Stack>
      </Stack>
    </Popover>
  );
}
