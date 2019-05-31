import form from "./login-event-handler"
import allFetchCalls from "./login-api"

// const header = document.createElement("h1")
const loginContainer = document.querySelector("#welcome-page-section");
// header.textContent = "WARDROBE"
// loginContainer.appendChild(header);

const login = {
  loginPost() {
    console.log("testPost");
    const signInButton = document.querySelector("#signInButton");
    const signUpButton = document.querySelector("#signUpButton");

    signUpButton.addEventListener("click", onSignUpClick);
    signInButton.addEventListener("click", onSignInClick);

    // CREATE SECTION FOR LOGIN
    const loginOutput = document.createElement("section");
    loginOutput.id = "loginOutput";
    loginContainer.appendChild(loginOutput);
  },
  getPostForPage() {
    allFetchCalls.getUser()
      .then(users => {

        const loginContainer = document.querySelector("#welcome-page-section");

        //  CREATING USER ELEMENT POST TO PUT TO DOM

        users.forEach(user => {
          const userSection = document.createElement("section");
          const userName = document.createElement("h1");
          const userPassword = document.createElement("h1");
          const userEmail = document.createElement("a");

          userName.textContent = user.userName;
          userPassword.textContent = user.userPassword;
          userEmail.textContent = user.userEmail;

          userSection.appendChild(userName);
          userSection.appendChild(userPassword);
          userSection.appendChild(userEmail);
          loginContainer.appendChild(userSection);
        })
      })
  }
}

const onSignUpClick = () => {
  showFormAndShowEmail(true);
  hideSignInUpButtons();
  document.querySelector("#submitButton").addEventListener("click",         form.handleAddFormSubmission);
}

const onSignInClick = () => {
  showFormAndShowEmail(false);
  hideSignInUpButtons();
  document.querySelector("#submitButton").addEventListener("click",         form.handleSignInFormSubmission);
}

const hideSignInUpButtons = () => {
  document.querySelector("#signInButton").style.display = "none";
  document.querySelector("#signUpButton").style.display = "none";
}

const showFormAndShowEmail = (showEmail) => {
  document.querySelector("#signInUpForm").style.display = "block";
  if (showEmail === false) {
    document.querySelector("#emailInput").style.display = "none";
    document.querySelector("#emailLabel").style.display = "none";
  }
}

export default login