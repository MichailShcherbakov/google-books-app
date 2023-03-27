export enum RequestStatusEnum {
  IDLE = "IDLE",
  REQUESTED = "REQUESTED",
  RECEIVED = "RECEIVED",
  REQUEST_FAILED = "REQUEST_FAILED",
}

export enum SortByEnum {
  NONE = "NONE",
  RELEVANCE = "RELEVANCE",
  NEWEST = "NEWEST",
}

export enum CategoryFilterEnum {
  ALL = "ALL",
  ART = "ART",
  BIOGRAPHY = "BIOGRAPHY",
  COMPUTERS = "COMPUTERS",
  HISTORY = "HISTORY",
  MEDICAL = "MEDICAL",
  POETRY = "POETRY",
}

export type BookSelectCriteria = {
  filterBy: CategoryFilterEnum;
  sortBy: SortByEnum;
  startIndex: number;
  maxResults: number;
};

export type Book = {
  id: string;
  volumeInfo: {
    authors: string[];
    averageRating: number;
    categories: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: string;
    publisher: string;
    publishedDate: string;
    title: string;
  };
};
