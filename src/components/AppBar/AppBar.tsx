import { Divider, Stack, Typography } from "@mui/material";
import { StackProps } from "@mui/system";
import { ReactComponent as LogoIcon } from "~/assets/icons/logo.svg";
import { FilterBar } from "../FilterBar";
import { SearchBar } from "../SearchBar";

export interface AppBarProps extends StackProps {}

export function AppBar(props: AppBarProps) {
  return (
    <Stack
      {...props}
      direction="row"
      alignItems="center"
      sx={theme => ({
        position: "sticky",
        top: 0,
        left: 0,
        flexShrink: 0,
        height: theme.spacing(10),
        paddingX: theme.spacing(4),
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.default,
      })}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Stack
          sx={theme => ({
            width: theme.spacing(6),
            height: theme.spacing(6),
          })}
        >
          <LogoIcon />
        </Stack>
        <Typography component="span" variant="h6">
          Bukstore
        </Typography>
      </Stack>
      <Divider orientation="vertical" variant="inset" />
      <Stack
        direction="row"
        alignItems="center"
        sx={theme => ({
          width: "100%",
          paddingX: theme.spacing(2),
        })}
        gap={2}
      >
        <FilterBar />
        <SearchBar />
      </Stack>
      <Divider orientation="vertical" variant="inset" />
      <Stack direction="row" alignItems="center"></Stack>
    </Stack>
  );
}
