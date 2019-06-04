import { MovieT } from "./movie";

export type SearchResultT = {
  page: string;
  per_page: string;
  total: number;
  total_pages: number;
  data: MovieT[];
};
