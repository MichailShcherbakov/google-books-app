export enum RequestStatusEnum {
  IDLE = "IDLE",
  REQUESTED = "REQUESTED",
  RECEIVED = "RECEIVED",
  REQUEST_FAILED = "REQUEST_FAILED",
}

export enum SortByEnum {
  RELEVANCE = "relevance",
  NEWEST = "newest",
}

export enum CategoryFilterEnum {
  ALL = "all",
  ART = "art",
  BIOGRAPHY = "biography",
  COMPUTERS = "computers",
  HISTORY = "history",
  MEDICAL = "medical",
  POETRY = "poetry",
}

export type BookSelectCriteria = {
  pattern: string;
  filterBy: CategoryFilterEnum;
  sortBy: SortByEnum;
  startIndex: number;
  maxResults: number;
};

export type Book = {
  id: string;
  volumeInfo: {
    authors?: string[];
    averageRating: number;
    categories: string[];
    description: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount?: number;
    publisher: string;
    publishedDate: string;
    title: string;
  };
};
