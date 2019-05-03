const clearElement = domElement => {
  while (domElement.firstChild) {
      domElement.removeChild(domElement.firstChild);
  }
}

export default buildLoginForm = {
  buildLoginMethod() {

  const loginContainer = document.querySelector("welcome-page-section");

  clearElement(loginContainer);

  const userNameLabel = document.createElement("label");
  userNameLabel.textContent = "User name: ";
  const userNameInput = document.createElement("Input");
  userNameInput.id = "users-login-section";

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password: ";
  const passwordInput = document.createElement("input");
  passwordInput.id = "password-input";

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email: ";
  const emailInput = document.createElement("input");
  emailInput.id = "email-input";

  const saveUserButton = document.createElement("button");
  saveUserButton.textContent = "Sign Up!";
  saveUserButton.id = "saveUser";
  },

const loginSections = document.createElement("section")
    loginContainer.appendChild(userNameLabel)
    loginSections.appendChild(userNameInput)
    loginSections.appendChild(passwordLabel)
    loginSections.appendChild(passwordInput)
    loginSections.appendChild(emailLabel)
    loginSections.appendChild(emailInput)
    loginSections.appendChild(saveUserButton)

    return loginContainer
}

handleAddFormSubmission() {
  console.log("testing")
  const userName = document.querySelector("#user-login-section").value;
  const userPassword = document.querySelector("#password-input").value;
  const userEmail = document.querySelector("#email-input").value;


  const loginPost = {
    Username: newsTitleSubmission,
    Password: synopsisSubmission,
    Email: urlSubmission

    console.log("testing", newNewsPost)

    const newsArticlesOutput = document.querySelector("#newsArticlesOutput")
// THESE SHOULD BE THE ACTION OF HANDLEADDFORM, CREATE NEW FETCH
    allFetchCalls.postNewArticle(newNewsPost)
      .then(clearElement(newsArticlesOutput))
      .then(news.getPostForPage);
  }
}