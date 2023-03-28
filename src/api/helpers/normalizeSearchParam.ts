export function normalizeSearchParam(param: string): string {
  return param.trim().toLowerCase().replace(/\s+/g, " ");
}
