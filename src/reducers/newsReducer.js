import { FETCH_NEWS, FETCH_ARTICLE, TRENDING_NEWS } from "../actions/types";

const initialState = {
  news: [],
  trendingNews: [],
  newsArticle: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: action.payload.articles,
      };
    case FETCH_ARTICLE:
      return {
        ...state,
        newsArticle: action.payload,
      };
    case TRENDING_NEWS:
      console.log(action.payload);
      return {
        ...state,
        trendingNews: action.payload.articles,
      };
    default:
      return state;
  }
}
