import { Book } from "~/store/books/type";

export type GetBooksResultFail = {
  error: {
    code: number;
    message: string;
  };
};

export type GetBooksResult = {
  kind: string;
  items: Book[];
  totalItems: number;
  error: undefined;
};

export type GetBookResult = Book & { error: undefined };

export type GetBookResultFail = GetBooksResultFail;
