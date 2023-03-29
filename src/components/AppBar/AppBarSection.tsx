import { Box, BoxProps, styled } from "@mui/material";

export interface AppBarSectionProps extends BoxProps {
  inline?: boolean;
}

export const AppBarSection = styled(Box, {
  shouldForwardProp: propName => propName !== "inline",
})<AppBarSectionProps>(({ theme, inline }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  width: inline ? "auto" : "100%",

  gap: theme.spacing(2),

  padding: theme.spacing(0, 4),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2),
  },
}));
