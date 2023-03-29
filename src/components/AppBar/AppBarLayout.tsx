import { styled } from "@mui/material";

export interface AppBarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const AppBarLayout = styled("div")(({ theme }) => ({
  position: "sticky",
  top: 0,
  left: 0,

  display: "flex",
  flexDirection: "row",
  flexShrink: 0,

  alignItems: "center",

  width: "100%",
  height: theme.spacing(10),

  overflow: "hidden",

  borderBottom: `1px solid ${theme.palette.divider}`,

  background: theme.palette.background.default,
}));
