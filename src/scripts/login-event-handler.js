import login from "./login-dom"
import allFetchCalls from "./login-api"

const buildLoginForm = {
  buildLoginMethod() {

    const loginContainer = document.querySelector("#welcome-page-section");

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

    const loginSections = document.createElement("section")
    loginSections.appendChild(userNameLabel)
    loginSections.appendChild(userNameInput)
    loginSections.appendChild(passwordLabel)
    loginSections.appendChild(passwordInput)
    loginSections.appendChild(emailLabel)
    loginSections.appendChild(emailInput)
    loginSections.appendChild(saveUserButton)
    loginContainer.appendChild(loginSections)

    return loginContainer;
  },

  handleAddFormSubmission() {
    console.log("testing")
    const userName = document.querySelector("#users-login-section").value;
    const userPassword = document.querySelector("#password-input").value;
    const userEmail = document.querySelector("#email-input").value;

    const loginPost = {
      Username: userName,
      Password: userPassword,
      Email: userEmail,
      id: null
    }
    console.log("testing", loginPost)

    const loginOutput = document.querySelector("#loginOutput")
    // THESE SHOULD BE THE ACTION OF HANDLEADDFORM, CREATE NEW FETCH

    allFetchCalls.postNewUser(loginPost)
      .then(clearElement(loginOutput))
      .then(login.getPostForPage)
  }
}

export default buildLoginForm