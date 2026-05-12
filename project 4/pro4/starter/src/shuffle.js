//TODO
//Note: You will not be able to run parcel without first fixing these errors
//Note: Complete TODO in utilityRenderFunctions.js first. 
// Check for ESLint errors and format with Prettier.
// This function is responsible for shuffling the flashcards.
// While the function is mostly correct, there are some errors.
// Use ESLint to identify the errors and Prettier to format the code.
// This function is responsible for shuffling the flashcards.
// Uses the Fisher-Yates shuffle algorithm.
const shuffle = (cards) => {
  let current = cards.length;
  const newCardsArray = [...cards];
  while (current !== 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current--;
    [newCardsArray[current], newCardsArray[randomIndex]] = [
      newCardsArray[randomIndex],
      newCardsArray[current],
    ];
  }
  return newCardsArray;
};

export { shuffle };