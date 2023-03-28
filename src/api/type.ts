import { Book } from "~/store/books/type";

export type GetBooksResult = {
  kind: string;
  items: Book[];
  totalItems: number;
};
