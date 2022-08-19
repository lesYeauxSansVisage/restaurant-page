const loadAboutPage = () => {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-section");

  const aboutTitle = document.createElement("h2");
  aboutTitle.classList.add("about-section__title");
  aboutTitle.innerText = "About us";
  aboutSection.append(aboutTitle);

  const aboutText = document.createElement("p");
  aboutText.classList.add("about-section__text");
  aboutText.innerText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, eos fugit! Esse, adipisci vero voluptatibus, perferendis quod, quas quia exercitationem architecto libero atque ipsum quibusdam eligendi eos fugit natus repellat.";
  aboutSection.append(aboutText);

  return aboutSection;
};

export default loadAboutPage;
