import { BASE_GOOGLE_BOOK_API_URL } from "../constants";

export class EndPointBuilder {
  private url: string;

  public constructor(initialURL: string = BASE_GOOGLE_BOOK_API_URL) {
    this.url = initialURL;
  }

  public addParam(name: string, ...values: (string | number)[]): this {
    this.url += `&${name}=${values.join("")}`;
    return this;
  }

  public build(): string {
    return this.url;
  }

  public reset(): this {
    this.url = BASE_GOOGLE_BOOK_API_URL;
    return this;
  }
}
