//DO NOT CHANGE ANYTHING IN THIS FILE//

// This file is responsible for rendering the full flashcard set,
// with buttons to navigate between cards, a form to create new cards,
// and a button to shuffle the cards.

// This function is responsible for generating the form used to create a new card.
import { renderCardForm } from "./createCard";
// This function is responsible for shuffling the flashcard
import { shuffle } from "./shuffle";
// Functions responsible for creating toggle button used to toggle the forms visibility
import { createToggleButton } from "./utilityRenderFunctions.js";

// The flash cards have two sides
// This generates one side of a flashcard card
const renderSide = (text, className) => {
  // Creates a container element for the card
  const div = document.createElement("div");
  // Creates the paragraph that will hold the text content
  const p = document.createElement("p");
  p.textContent = text;
  div.className = className;
  //Appends the content to the container
  div.append(p);
  return div;
};

// This generates the flashcard elements
// Takes a card as an argument
const generateFlashCard = (card) => {
  // Creates the Term side
  const termSide = renderSide(card.term, "term");
  // Creates the description side
  const descriptionSide = renderSide(card.description, "description");

  // Creates an inner card that will help with the Flash Card animation
  const innerCard = document.createElement("div");
  innerCard.className = "innerCard";
  innerCard.append(termSide, descriptionSide);

  // Creates a container for the card
  const cardContainer = document.createElement("div");
  cardContainer.className = "cardContainer";
  cardContainer.append(innerCard);

  return cardContainer;
};

// Renders the flashcards to the DOM one card at a time
// Includes next and previous buttons.
// Takes a study set and a current index as arguments
const renderFlashCards = (set, index = 0) => {
  // Clear the main content area
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Creates a container for the page
  const container = document.createElement("div");
  container.className = "cardPageContainer";

  // If we are not at the end of the study set
  // Create the flash card at the current index
  if (set.length !== 0) {
    const currentCard = generateFlashCard(set[index]);

    // creates Previous button
    const previousBtn = createNavigationButton("Previous", () => {
      // If the current index is 0, set the index to the last item in the set.
      // Allows us to loop to the end of the set
      index = index > 0 ? index - 1 : set.length - 1;
      renderFlashCards(set, index);
    });

    //Creates next button
    const nextBtn = createNavigationButton("Next", () => {
      // If the current index is at the last item in the set, set the index to 0.
      // Allows us to loop to the start of the set
      index = index < set.length - 1 ? index + 1 : 0;
      renderFlashCards(set, index);
    });

    //Creates a container for out buttons
    const nextAndPrevBtn = document.createElement("div");
    nextAndPrevBtn.append(previousBtn, nextBtn);
    nextAndPrevBtn.className = "nextAndPrevBtnContainer";

    //Appends card and buttons to the page container
    container.append(currentCard, nextAndPrevBtn);
  }

  // Generates from for creating cards
  const form = renderCardForm(set);
  // Sets form to be invisible
  form.className = "notVisible";

  // Creates button for toggling the form
  const addCardBtn = createToggleButton("Add New Card", form);
  addCardBtn.setAttribute("data-cy", "toggle_form");

  // Creates button for shuffling the cards
  const shuffleBtn = document.createElement("button");
  shuffleBtn.textContent = "Shuffle Cards";

  // Adds an event listener to the shuffle button.
  // On click, the flashcards will be shuffled.
  shuffleBtn.addEventListener("click", () => shuffleCards(set));

  // Appends cards form and shuffle button to the page containers
  container.append(shuffleBtn, addCardBtn, form);
  // Appends the container to the dom
  main.append(container);
};

// Creates a navigation button
const createNavigationButton = (text, onClick) => {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", onClick);
  return btn;
};

const shuffleCards = (set) => {
  const shuffledCards = shuffle(set);
  renderFlashCards(shuffledCards);
};

export { renderSide, generateFlashCard, renderFlashCards };
