const menuInfo = [
  {
    name: "Black Burger",
    img: "https://cdn.trendhunterstatic.com/thumbs/329/all-black-burger.jpeg?auto=webp",
    description:
      "Even though other restaurants have been experimenting with black burger buns, this all black burger takes things to a darker and more extreme level.",
  },
  {
    name: "The Dark Night",
    img: "https://cdn.trendhunterstatic.com/thumbs/354/the-dark-night.jpeg?auto=webp",
    description:
      "The simple, three-ingredient cocktail is prepared with Ransom Old Tom gin, Jack Rudy Tonic and about a half a teaspoon of charcoal, which gives the drink its distinctive black coloring. ",
  },
  {
    name: "The Eclipse Magic Cone",
    img: "https://cdn.trendhunterstatic.com/thumbs/358/themed-ice-cream.jpeg?auto=webp",
    description:
      "The Eclipse Magic Cone consisted of a black charcoal waffle cone that was rimmed with edible gold and filled with spiced marshmallow fluff, turmeric and golden yellow coconut soft serve before being dipped in a black sesame dip.",
  },
  {
    name: "Activated Charcoal Fish ",
    img: "https://cdn.trendhunterstatic.com/phpthumbnails/356/356448/356448_4_800.jpeg?auto=webp",
    description:
      "The Activated Charcoal Fish and Chips may look unappetizing, but its flavor infusion and health benefits are sure to satisfy. Charcoal has been successfully implemented in cosmetic products and toothpaste due to its ability to trap toxins and cleanse the body.",
  },
];

const loadMenuPage = () => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu__title");
  menuTitle.innerText = "What would you like today?";
  menuSection.append(menuTitle);

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");
  menuSection.append(menuGrid);

  createRows(2, menuGrid);

  return menuSection;
};

function createRows(quantity, element) {
  const items = menuInfo.slice();
  const menuGrid = document.querySelector('.menu-grid');

  console.log(menuGrid);

  for (let i = 0; i < quantity; i++) {
    const rowItems = items.splice(0, quantity);
    const row = document.createElement('div');
    row.classList.add('row');
    rowItems.forEach((item) => {
      const itemEl = createMenuItem(item);
      row.append(itemEl);
    });

    element.append(row)
  }
}



function createMenuItem(item) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('col-2-of-4')
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  menuItem.innerHTML = `
  <div class="menu-item__image"><img src="${item.img}"></div>
    <div class="menu-item__info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
    </div>
    <div class="menu-item__buttons">
    <button>Order Now!</button>
    </div>
  `;

  gridItem.append(menuItem)

  return gridItem;
}

export default loadMenuPage;
