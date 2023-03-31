import Image from "next/image";

import BookIcon from "~/assets/icons/book.svg";
import {
  BookThumbnailLayout,
  BookThumbnailLayoutProps,
} from "./BookThumbnailLayout";

export interface BookThumbnailProps extends BookThumbnailLayoutProps {
  src?: string;
  alt?: string;
}

export function BookThumbnail({
  src,
  alt = "book thumbnail",
  ...props
}: BookThumbnailProps) {
  return (
    <BookThumbnailLayout {...props}>
      {!src && <BookIcon />}
      {src && <Image src={src} alt={alt} width="160" height="160" priority />}
    </BookThumbnailLayout>
  );
}
