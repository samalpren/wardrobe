import buildLoginForm from "./login-event-handler";
import allFetchCalls from "./news-api-handler";

const header = document.createElement("h1")
const loginContainer = document.querySelector("#welcome-page-section");
header.textContent = "WARDROBE"
loginContainer.appendChild(header);

const login = {
  loginPost() {
    const userButton = document.createElement("button");
    userButton.textContent = "Username";
    loginContainer.appendChild(userButton);

    userButton.addEventListener("click", () => {
      buildLoginForm.buildNewsForm()
      document.querySelector("#save-signin-section").addEventListener("click", buildLoginForm.handleAddFormSubmission);
    })
    // CREATE SECTION TO ARTICLES AND APPEND TO DOM
    const newsArticlesOutput = document.createElement("section");
    newsArticlesOutput.id = "newsArticlesOutput";
    newsContainer.appendChild(newsArticlesOutput);
  },
  // CHANGE THE NAME FOR ONLY EXISTING ARTICLES
  getPostForPage() {
    allFetchCalls.getArticles()
    .then(articles => {

        const newsContainer = document.querySelector("#newsArticlesOutput");

        //  CREATING NEWS ELEMENT POST TO PUT TO DOM

        articles.forEach(article => {
         const loginSection = document.createElement("section");
         const username = document.createElement("h2");
         const password = document.createElement("h2");
         const email = document.createElement("h2");

         username.textContent = article.username;
         synopsis.textContent = article.password;
         password.textContent = article.password;
         email.textContent = article.email

         loginSection.appendChild(username);
         loginSection.appendChild(password);
         loginSection.appendChild(email);
         loginContainer.appendChild(loginSection);
        })
       })
      }
    };

    export default login;
