import { styled } from "@mui/material";

export interface AppBarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
}

export const AppBarSection = styled("div", {
  shouldForwardProp: propName => propName !== "inline",
})<AppBarSectionProps>(({ theme, inline }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  width: inline ? "auto" : "100%",

  gap: theme.spacing(2),

  padding: theme.spacing(0, 4),
}));
