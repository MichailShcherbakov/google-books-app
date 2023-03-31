import { Box, BoxProps, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

type BookThumbnailSize = "medium" | "large";

const BOOK_THUMBNAIL_SIZES: Record<
  BookThumbnailSize,
  {
    width: number; // rem
    height: number; // rem
  }
> = {
  medium: {
    width: 21.75,
    height: 28,
  },
  large: {
    width: 21.75 * 2,
    height: 28 * 2,
  },
};

export interface BookThumbnailLayoutProps extends BoxProps {
  /**
   * @default "medium"
   */
  size?: BookThumbnailSize;
}

export const BookThumbnailLayout = styled(Box, {
  shouldForwardProp: propName => propName !== "size",
})<BookThumbnailLayoutProps>(({ theme, size = "medium" }) => ({
  "& > *": {
    width: theme.spacing(BOOK_THUMBNAIL_SIZES[size].width),
    height: theme.spacing(BOOK_THUMBNAIL_SIZES[size].height),
    borderRadius: theme.spacing(1),
    color: grey[400],

    [theme.breakpoints.down("sm")]: {
      ...(size === "large" && {
        width: theme.spacing(BOOK_THUMBNAIL_SIZES["medium"].width),
        height: theme.spacing(BOOK_THUMBNAIL_SIZES["medium"].height),
      }),
    },
  },
}));
