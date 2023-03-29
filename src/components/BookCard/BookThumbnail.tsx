import { Stack, StackProps } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactComponent as BookIcon } from "~/assets/icons/book.svg";

export interface BookThumbnailProps extends StackProps {
  src?: string;
  alt: string;
}

export function BookThumbnail({ src, alt, ...props }: BookThumbnailProps) {
  return (
    <Stack
      {...props}
      sx={theme => ({
        width: theme.spacing(16),
        height: theme.spacing(24),

        "& > img": {
          width: theme.spacing(16),
          height: theme.spacing(24),
          borderRadius: theme.spacing(1),
        },

        "& > svg": {
          width: theme.spacing(16),
          height: theme.spacing(24),
          color: grey[400],
        },
      })}
    >
      {!src && <BookIcon />}
      {src && <img src={src} alt={alt} />}
    </Stack>
  );
}
