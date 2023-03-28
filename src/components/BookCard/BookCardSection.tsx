import { Stack, StackProps, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const BookCardSectionIconWrapper = styled("picture")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: grey[500],
}));

export interface BookCardSectionProps extends StackProps {
  icon: React.ReactElement;
  label: string;
}

export function BookCardSection({
  icon,
  label,
  ...props
}: BookCardSectionProps) {
  return (
    <Stack {...props} direction="row" alignItems="center" gap={1}>
      <BookCardSectionIconWrapper>{icon}</BookCardSectionIconWrapper>
      <Typography component="p" variant="body2" width="100%" noWrap>
        {label}
      </Typography>
    </Stack>
  );
}
