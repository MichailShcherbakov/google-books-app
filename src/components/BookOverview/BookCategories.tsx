import { Typography, TypographyProps } from "@mui/material";

export interface BookCategoriesProps extends TypographyProps<"p"> {
  categories: string[];
}

export function BookCategories({ categories, ...props }: BookCategoriesProps) {
  return (
    <Typography {...props} component="p" variant="body1">
      {categories.join(" / ")}
    </Typography>
  );
}
