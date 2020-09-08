import { FETCH_NEWS, FETCH_ARTICLE } from "../actions/types";

const initialState = {
  news: [],
  newsArticle: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      console.log(action.payload.articles);
      return {
        ...state,
        news: action.payload.articles,
      };
    case FETCH_ARTICLE:
      return {
        ...state,
        newsArticle: action.payload,
      };

    default:
      return state;
  }
}
