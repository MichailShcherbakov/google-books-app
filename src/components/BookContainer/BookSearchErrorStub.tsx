import { Stack, StackProps, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import SearchIcon from "~/assets/icons/search.svg";

export interface BookSearchErrorStubProps extends StackProps {}

export function BookSearchErrorStub({ ...props }: BookSearchErrorStubProps) {
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
          color: red[400],
        })}
      >
        <SearchIcon />
      </Stack>
      <Stack direction="column" alignItems="center" gap={1}>
        <Typography component="p" variant="h6">
          Oh nooo!
        </Typography>
        <Stack direction="column" alignItems="center" gap={0.5}>
          <Typography
            component="p"
            variant="body2"
            sx={{
              color: grey[600],
            }}
          >
            Something went wrong.
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{
              color: grey[600],
            }}
          >
            Refresh the page or try again later.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
