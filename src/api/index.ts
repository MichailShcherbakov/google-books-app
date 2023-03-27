import { DEFAULT_MAX_RESULTS, DEFAULT_START_INDEX } from "./constants";
import { URLBuilder } from "./helpers/URLBuilder";
import { GetBooksResult } from "./type";

export type GetBooksOptions = {
  pattern?: string;
  /**
   * @default 0
   */
  startIndex?: number;
  /**
   * @default 30
   */
  maxResults?: number;
  /**
   * @default "relevance"
   */
  sortBy?: "relevance" | "newest";
};

export const GoogleBookApi = {
  async getBooks(options: GetBooksOptions): Promise<GetBooksResult> {
    const {
      pattern,
      sortBy = "relevance",
      startIndex = DEFAULT_START_INDEX,
      maxResults = DEFAULT_MAX_RESULTS,
    } = options;

    const urlBuilder = URLBuilder.create();

    const safePattern = pattern?.trim().toLocaleLowerCase() ?? "";

    urlBuilder
      .addParam("q", safePattern, "+intitle:keyes")
      .addParam("startIndex", startIndex)
      .addParam("maxResults", maxResults)
      .addParam("orderBy", sortBy);

    const endpoint = urlBuilder.build();

    const data: GetBooksResult = await fetch(endpoint).then(req => req.json());

    return data;
  },
};
