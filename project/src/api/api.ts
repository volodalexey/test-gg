import axios from "axios";

export function searchQuery(title: string, page: string) {
  let url = `https://jsonmock.hackerrank.com/api/movies/search/`;
  let queryParams = [];
  if (title) {
    queryParams.push(`Title=${title}`);
  }
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (queryParams) {
    url += "?" + queryParams.join("&");
  }
  return axios.get(url);
}
