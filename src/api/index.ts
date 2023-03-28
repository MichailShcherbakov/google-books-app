import { BookSelectCriteria } from "~/store/books/type";
import { DEFAULT_MAX_RESULTS, DEFAULT_START_INDEX } from "./constants";
import { URLBuilder } from "./helpers/URLBuilder";
import { GetBooksResult } from "./type";

export const GoogleBookApi = {
  async getBooks(options: BookSelectCriteria): Promise<GetBooksResult> {
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
