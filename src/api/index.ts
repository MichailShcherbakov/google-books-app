import { BookSearchCriteria, CategoryFilterEnum } from "~/store/books/type";
import { EndPointBuilder } from "./helpers/EndPointBuilder";
import { normalizeSearchParam } from "./helpers/normalizeSearchParam";
import { QueryBuilder } from "./helpers/QueryBuilder";
import { GetBooksResult } from "./type";

export const GoogleBookApi = {
  async getBooks(options: BookSearchCriteria): Promise<GetBooksResult> {
    const { pattern, sortBy, filterBy, startIndex, pageSize } = options;

    const normalizedPattern = normalizeSearchParam(pattern);
    const normalizedFilterBy = normalizeSearchParam(filterBy);
    const normalizedSortBy = normalizeSearchParam(sortBy);

    const endPointBuilder = new EndPointBuilder();
    const queryBuilder = new QueryBuilder();

    normalizedPattern.split(" ").forEach(word => {
      queryBuilder.addParam("intitle", word);
    });

    if (filterBy !== CategoryFilterEnum.ALL) {
      queryBuilder.addParam("subject", normalizedFilterBy);
    }

    const q = queryBuilder.build();

    endPointBuilder
      .addParam("q", q)
      .addParam("startIndex", startIndex)
      .addParam("maxResults", pageSize)
      .addParam("orderBy", normalizedSortBy);

    const endpoint = endPointBuilder.build();

    const data: GetBooksResult = await fetch(endpoint).then(req => req.json());

    return data;
  },
};
