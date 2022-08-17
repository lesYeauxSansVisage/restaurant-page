const loadHomePage = () => {
  const homeSection = document.createElement("section");
  homeSection.classList.add("home-section");

  homeSection.append(homeLogoBox());

  return homeSection;
};

const homeLogoBox = () => {
  const textBox = document.createElement("div");
  textBox.classList.add("home__logo-box");

  const textBoxH1 = document.createElement("h1");
  textBox.classList.add("logo-box__title");
  textBoxH1.innerText = "Welcome to the Gothic Restaurant!";

  const textBoxSubtitle = document.createElement("p");
  textBox.classList.add("logo-box__subtitle");
  textBoxSubtitle.innerText = "The best restaurant in the World";

  textBox.append(textBoxH1);
  textBox.append(textBoxSubtitle);

  return textBox;
};

export default loadHomePage;
