import axios from "axios";

export function searchQuery(title: string, page: string) {
  return axios.get(
    `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`
  );
}
