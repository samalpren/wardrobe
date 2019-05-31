import allFetchCalls from "./login-api"

const form = {

  handleAddFormSubmission() {
    console.log("testing")
    const userName = document.querySelector("#usernameInput").value;
    const userPassword = document.querySelector("#passwordInput").value;
    const userEmail = document.querySelector("#emailInput").value;

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
          const newUserId = foo.find(x =>
            x.Username === loginPost.Username &&
            x.Email === loginPost.Email &&
            x.Password === loginPost.Password).id

          storeUserIdAndShowMenu(newUserId);
        });
      });

      //.then(clearElement(loginOutput)) // TODO - get this working
      //.then(login.getPostForPage) // TODO - need to talk about what this was trying to do
  },

  handleSignInFormSubmission() {
    const userName = document.querySelector("#usernameInput").value;
    const userPassword = document.querySelector("#passwordInput").value;

    const loginPost = {
      Username: userName,
      Password: userPassword
    }

    const loginOutput = document.querySelector("#loginOutput")
    // THESE SHOULD BE THE ACTION OF HANDLEADDFORM, CREATE NEW FETCH

    // 1. create the new user in the db
        // 2. get the new user from the db so we have their UserID
        allFetchCalls.getUser().then(foo => {

          let existingUser = foo.find(x =>
            x.Username === loginPost.Username &&
            x.Password === loginPost.Password);

          let existingUserId = 0;

          if (existingUser !== undefined) {
            existingUserId = existingUser.id;
          }

          console.log(`ExistingUserId: ${existingUserId}`);

          if (existingUserId !== 0) { // we found this user!
            storeUserIdAndShowMenu(existingUserId);
          } else { // user not found
            document.querySelector("#spnBadUser").style.display = "block";
          }


        });

      //.then(clearElement(loginOutput)) // TODO - get this working
      //.then(login.getPostForPage) // TODO - need to talk about what this was trying to do
  }
}

const storeUserIdAndShowMenu = (userId) => {
  // then store the new user id in session
  sessionStorage.setItem("wardrobe.loggedInUserId", userId);

  // now hide the user login stuff
  document.querySelector("#welcome-page-section").style.display = "none";

  // and now show the menu stuff
  document.querySelector("#menu-section").style.display = "block";
  // and pull out the userid from session and display on the page
  const loggedInUserId = sessionStorage.getItem("wardrobe.loggedInUserId");
  document.querySelector("#spnUserId").innerHTML = loggedInUserId;
}

export default form;