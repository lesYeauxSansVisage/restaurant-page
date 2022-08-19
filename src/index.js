import loadHomePage from "./home";

import loadAboutPage from "./about";

const content = document.querySelector(".content");

content.append(loadHomePage());

const aboutLink = document.querySelector("#about");

aboutLink.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(loadAboutPage());
});

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(loadHomePage());
});
