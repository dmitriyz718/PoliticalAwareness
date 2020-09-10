import { FETCH_NEWS, FETCH_ARTICLE, TRENDING_NEWS } from "./types";
require("dotenv").config();
export const fetchNews = (key) => (dispatch) => {
  let url = "";
  if (key == "") {
    url =
      "https://newsapi.org/v2/everything?" +
      "q=donald trump&" +
      "from=2020-09-08&" +
      "sortBy=popularity&" +
      `apiKey=${process.env.REACT_APP_NEWSAPI}`;
  } else {
    url =
      "https://newsapi.org/v2/everything?" +
      `q=${key}&` +
      "from=2020-09-08&" +
      "sortBy=popularity&" +
      `apiKey=${process.env.REACT_APP_NEWSAPI}`;
  }

  let req = new Request(url);
  fetch(req)
    .then((res) => res.json())
    .then((items) =>
      dispatch({
        type: FETCH_NEWS,
        payload: items,
      })
    )

    .catch((err) => {
      console.log(err);
    });
};
export const trendingNews = () => (dispatch) => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&totalresults=5&apiKey=${process.env.REACT_APP_NEWSAPI}`;

  let req = new Request(url);
  fetch(req)
    .then((res) => res.json())
    .then((items) =>
      dispatch({
        type: TRENDING_NEWS,
        payload: items,
      })
    )

    .catch((err) => {
      console.log(err);
    });
};
export const fetchArticle = (article) => (dispatch) => {};
