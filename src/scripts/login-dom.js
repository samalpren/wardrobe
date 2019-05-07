import buildLoginForm from "./login-event-handler"
import allFetchCalls from "./login-api"

const header = document.createElement("h1")
const loginContainer = document.querySelector("#welcome-page-section");
header.textContent = "WARDROBE"
loginContainer.appendChild(header);

const login = {
  loginPost() {
    console.log("testPost");
    const userButton = document.createElement("button");
    userButton.textContent = "Username";
    loginContainer.appendChild(userButton);

    userButton.addEventListener("click", () => {
      buildLoginForm.buildLoginMethod()
      document.querySelector("#saveUser").addEventListener("click", buildLoginForm.handleAddFormSubmission);
    })
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

export default login