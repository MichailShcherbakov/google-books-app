export class QueryBuilder {
  public constructor(private pattern: string = "") {}

  public addParam(name: string, value: string): this {
    this.pattern += `+${name}:"${value}"`;
    return this;
  }

  public build(): string {
    return this.pattern;
  }
}
