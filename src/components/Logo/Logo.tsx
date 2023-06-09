import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import LogoIcon from "~/assets/icons/logo.svg";

export interface LogoProps {
  /**
   * @default true
   */
  withSlogan?: boolean;
  /**
   * @default true
   */
  isNavigatable?: boolean;
}

export function Logo({
  withSlogan = true,
  isNavigatable = true,
  ...props
}: LogoProps) {
  const router = useRouter();

  return (
    <Stack
      {...props}
      direction="row"
      alignItems="center"
      gap={2}
      sx={{
        cursor: isNavigatable ? "pointer" : "inherit",
      }}
      onClick={() => isNavigatable && router.push("/")}
    >
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
