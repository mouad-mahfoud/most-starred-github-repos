import axios from "axios";

export async function getRepos(page = 1) {
  const response = await axios.get(
    "http://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=" +
      page
  );
  return response.data;
}
