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

    const signinButton = document.createElement("button");
    signinButton.textContent = "Sign In!";
    signinButton.id = "signin";

    const saveUserButton = document.createElement("button");
    saveUserButton.textContent = "Sign Up!";
    saveUserButton.id = "saveUser";

    const loginSections = document.createElement("section")
    loginSections.id = "loginSection";
    loginSections.appendChild(userNameLabel)
    loginSections.appendChild(userNameInput)
    loginSections.appendChild(passwordLabel)
    loginSections.appendChild(passwordInput)
    loginSections.appendChild(emailLabel)
    loginSections.appendChild(emailInput)
    loginSections.appendChild(signinButton)
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

    // 1. create the new user in the db
    allFetchCalls.postNewUser(loginPost)
      .then(() => {
        // 2. get the new user from the db so we have their UserID 
        allFetchCalls.getUser().then(foo => {
          console.log(foo);
          var newUserId = foo.find(x => 
            x.Username === loginPost.Username &&
            x.Email === loginPost.Email &&
            x.Password === loginPost.Password).id
          
          // then store the new user id in session
          sessionStorage.setItem("Wardrobe.LoggedInUserId", newUserId);

          debugger;
          // this code below changes to page 2
          // NEVERMIND, DON'T DO THIS --->   window.location.href = "./Page2.html";

          // now hide the user login stuff
          document.querySelector("#loginSection").style.display = "none";

          // and now show the menu stuff
          document.querySelector("#menu-section").style.display = "block";
          // and pull out the userid from session and display on the page
          var loggedInUserId = sessionStorage.getItem("Wardrobe.LoggedInUserId");
          document.querySelector("#spnUserId").innerHTML = loggedInUserId;
        });
      });

      //.then(clearElement(loginOutput)) // TODO - get this working
      //.then(login.getPostForPage) // TODO - need to talk about what this was trying to do

    
  }
}

export default buildLoginForm