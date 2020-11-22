import { images, renderCards } from "./scripts/renderCards.js";

const cardLimit = 6;

renderCards(images(cardLimit));

// fim da a renderização

const initBtn = document.querySelector("#initBtn"),
  cards = document.querySelectorAll(".memory-card");
let firstCard,
  secondCard,
  lockCard,
  points = 0;

const setInitBtn = (boolean, style) => {
  initBtn.disabled = boolean;
  initBtn.style.cssText = style;
};

function flip() {
  if (lockCard) return;
  console.log(this);

  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;

    return;
  }

  secondCard = this;

  datasetInterrelation(firstCard, secondCard, "card");

  if (points === 6) {
    setTimeout("location.reload()", 1000);
  }
}

const datasetInterrelation = (comparative1, comparative2, prop) => {
  const isMatch =
    comparative1.dataset[`${prop}`] === comparative2.dataset[`${prop}`];

  isMatch ? matched(isMatch) : desableCards();
};

const matched = (isMatch = false) => {
  if (isMatch) {
    points++;

    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
  }

  [firstCard, secondCard, lockCard] = [null, null, false];
};

const desableCards = () => {
  lockCard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    matched();
  }, 1000);
};

const initGame = () => {
  setInitBtn(true, "opacity: 50%; background-color: red;");

  cards.forEach((card) => {
    let rand = Math.floor(Math.random() * cards.length);

    card.style.order = rand;
    card.style.opacity = "100%";

    card.addEventListener("click", flip);
  });
};

initBtn.addEventListener("click", initGame);
