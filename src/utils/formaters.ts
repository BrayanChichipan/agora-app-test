import { QueryParams } from "@/interfaces";

export function formatQueryParams(params: QueryParams): string {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    if (params[key] !== null && params[key] && params[key].length !== 0)
      searchParams.append(key, String(params[key]));
  }

  return searchParams.toString();
}
