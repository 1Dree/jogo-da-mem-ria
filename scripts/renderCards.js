import { picsumUrlStore } from "./picsumUrls.js";

function mockVector(start, end) {
  let myArray = [];

  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }

  return myArray;
}

function images(limit) {
  const urlStore = picsumUrlStore(mockVector(0, 20)),
    images = [];

  for (let i = 1; i <= limit; i++) {
    images.push(urlStore[i]);
  }

  return images;
}

const cardHTML = (imgs) =>
  imgs
    .map(
      (img) => `
        <div class="memory-card" data-card="${img}">
          <img class="front" src="${img}" alt="memory card" />
          <div class="back">
            <p>memory</p>
          </div>
        </div>
      `
    )
    .join("");

const renderCards = (_imgs) => {
  const content = cardHTML(_imgs);

  cardboard.innerHTML = content + content;
};

export { images, renderCards };
