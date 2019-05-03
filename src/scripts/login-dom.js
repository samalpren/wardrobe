import buildLoginForm from "./login-event-handler"

const header = document.createElement("h1")
const loginContainer = document.querySelector("#welcome-page-section");
header.textContent = "WARDROBE"
loginContainer.appendChild(header);

export default login = {
  loginPost() {
    console.log("testPost");
    const userButton = document.createElement("button");
    userButton.textContent = "Username";
    loginContainer.appendChild(userButton);

    userButton.addEventListener("click", () => {
      buildLoginForm.buildLoginMethod()
      document.querySelector("#save-signin-section").addEventListener("click", buildLoginForm.handleAddFormSubmission);
    })
    // CREATE SECTION FOR LOGIN
    const loginOutput = document.createElement("section");
    loginOutput.id = "loginOutput";
    loginContainer.appendChild(loginOutput);
  }
}