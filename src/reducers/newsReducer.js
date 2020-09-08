import { FETCH_NEWS } from "../actions/types";

const initialState = {
  news: [],
  newsArticle: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      console.log("reducer");
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
