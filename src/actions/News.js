import { FETCH_NEWS, FETCH_ARTICLE } from "./types";
export const fetchNews = (key) => (dispatch) => {
  let url = "";
  if (key == "") {
    url =
      "http://newsapi.org/v2/everything?" +
      "q=donald trump&" +
      "from=2020-09-08&" +
      "sortBy=popularity&" +
      "apiKey=fbd471666ac742f6b216645a7345e0fe";
  } else {
    url =
      "http://newsapi.org/v2/everything?" +
      `q=${key}&` +
      "from=2020-09-08&" +
      "sortBy=popularity&" +
      "apiKey=fbd471666ac742f6b216645a7345e0fe";
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
