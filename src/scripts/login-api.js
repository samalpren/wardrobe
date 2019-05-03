const allFetchCalls = {
  getArticles() {
    return fetch("http://localhost:8088/articles")
    .then (response => response.json())
  },
  postNewArticle(newNewsPost) {
    return fetch("http://localhost:8088/articles", {
    method: "POST",
    body: JSON.stringify(newNewsPost),
    headers: {
      "Content-Type": "application/json"
    }
    });
  }
};

export default allFetchCalls;