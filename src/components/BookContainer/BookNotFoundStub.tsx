import { Stack, StackProps, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "~/assets/icons/search.svg";

export interface BookNotFoundStubProps extends StackProps {}

export function BookNotFoundStub({ ...props }: BookNotFoundStubProps) {
  return (
    <Stack
      {...props}
      direction="column"
      alignItems="center"
      gap={3}
      sx={theme => ({
        padding: theme.spacing(10, 0, 0, 0),
      })}
    >
      <Stack
        sx={theme => ({
          width: theme.spacing(10),
          height: theme.spacing(10),
          color: theme.palette.primary.main,
        })}
      >
        <SearchIcon />
      </Stack>
      <Stack direction="column" alignItems="center" gap={1}>
        <Typography component="p" variant="h6">
          The book is not found
        </Typography>
        <Stack direction="column" alignItems="center" gap={0.5}>
          <Typography
            component="p"
            variant="body2"
            sx={{
              color: grey[600],
            }}
          >
            {"We can't find the book you're looking for."}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{
              color: grey[600],
            }}
          >
            You can either visit our homepage, or search using the search box
            above.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
