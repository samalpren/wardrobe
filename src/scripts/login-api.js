const allFetchCalls = {
  getUser() {
    return fetch("http://localhost:8088/users")
    .then (response => response.json())
  },
  postNewUser(loginPost) {
    return fetch("http://localhost:8088/users", {
    method: "POST",
    body: JSON.stringify(loginPost),
    headers: {
      "Content-Type": "application/json"
    }
    });
  }
};

export default allFetchCalls;