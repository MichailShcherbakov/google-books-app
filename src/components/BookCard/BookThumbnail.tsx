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
        "& > *": {
          width: theme.spacing(21.75),
          height: theme.spacing(28),
          borderRadius: theme.spacing(1),
          color: grey[400],
        },
      })}
    >
      {!src && <BookIcon />}
      {src && <img src={src} alt={alt} />}
    </Stack>
  );
}
