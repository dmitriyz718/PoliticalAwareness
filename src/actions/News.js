export const fetchNews = () => (dispatch) => {
  fetch(
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=Taylor%20Swift&safeSearch=false",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": "62310f7da6mshce26a8528bd795ap1f8ab1jsn33f3386aadf6",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
