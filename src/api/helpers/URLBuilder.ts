import { BASE_GOOGLE_BOOK_API_URL } from "../constants";

export class URLBuilder {
  private url: string;

  public constructor(initialURL: string = BASE_GOOGLE_BOOK_API_URL) {
    this.url = initialURL;
  }

  public static create(): URLBuilder {
    return new URLBuilder();
  }

  public static createFrom(initialURL: string): URLBuilder {
    return new URLBuilder(initialURL);
  }

  public addParam(name: string, ...values: (string | number)[]): URLBuilder {
    this.url += `&${name}=${values.join("")}`;
    return this;
  }

  public build(): string {
    return this.url;
  }

  public reset(): URLBuilder {
    this.url = BASE_GOOGLE_BOOK_API_URL;
    return this;
  }
}
