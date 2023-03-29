import { Stack, Typography } from "@mui/material";
import { ReactComponent as LogoIcon } from "~/assets/icons/logo.svg";

export interface LogoProps {
  /**
   * @default true
   */
  withSlogan?: boolean;
}

export function Logo({ withSlogan = true, ...props }: LogoProps) {
  return (
    <Stack {...props} direction="row" alignItems="center" gap={2}>
      <Stack
        sx={theme => ({
          width: theme.spacing(6),
          height: theme.spacing(6),
        })}
      >
        <LogoIcon />
      </Stack>
      <Stack>
        <Typography component="span" variant="h6">
          Bukstore
        </Typography>
        {withSlogan && (
          <Typography component="span" variant="body2">
            Search books with Google Book API
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
