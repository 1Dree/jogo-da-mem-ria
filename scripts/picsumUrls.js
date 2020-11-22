function numberGenerator(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2);

  return result;
}

function picsumUrlStore(auxVector) {
  const urls = [];

  if (auxVector.length !== 0) {
    auxVector.forEach((item, i, vector) => {
      let randomIndex = numberGenerator(0, vector.length - 1);
      let randomNumber = vector[randomIndex];

      vector.splice(randomIndex, 1);

      urls.push(`https://picsum.photos/id/${randomNumber}/200`);
    });
  }

  return urls;
}

export { numberGenerator, picsumUrlStore };
