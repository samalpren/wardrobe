const allFetchCalls = {
  getUser() {
    return fetch("http://localhost:8088/users")
    .then (response => response.json())
  },
  postNewUser(userButton) {
    return fetch("http://localhost:8088/users", {
    method: "POST",
    body: JSON.stringify(userButton),
    headers: {
      "Content-Type": "application/json"
    }
    });
  }
};

export default allFetchCalls;