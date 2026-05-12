//DO NOT CHANGE ANYTHING IN THIS FILE//

// Our application contains flashcard study sets.
// This file is responsible for loading the page that
// displays the collection of sets.
// Users can click on a set to view and interact with the flashcards.

// Loads data for card sets
import { cardSets } from "../data/data.js";
// Function responsible for rendering flashcards page
import { renderFlashCards } from "./cardsPage.js";
// Function responsible for creating the form to create a new study set.
import { createSetForm } from "./createSet.js";
// Functions responsible for creating the pages header
//and a toggle button used to toggle the forms visibility
import { createHeader, createToggleButton } from "./utilityRenderFunctions.js";

// Function responsible for rendering the page
export const renderCardSetsPage = () => {
  // Creates a container for the pages contents
  const container = document.createElement("div");
  container.className = "cardPageContainer";
  // Creates the header for the page
  const pageHeader = createHeader(
    "h2",
    "Study Set Library",
    "study-set-header"
  );

  // Function creates the element representing the study card set
  const sets = createCardSets();
  // Function responsible for creating the form to create a new study set.
  const form = createSetForm(cardSets);
  // Sets the form to be invisible

  //Creates a button that will toggle the forms visibility
  const toggleFormButton = createToggleButton("Add New Set", form);
  // Attribute used for selecting the forms during Cypress tests.
  toggleFormButton.setAttribute("data-cy", "toggle_form");

  //Appends all the content to the pages container
  container.append(pageHeader, sets, toggleFormButton, form);

  //Gets the main section of the dom
  const main = document.querySelector("main");
  // Clears the main section of any existing content.
  main.innerHTML = "";
  //Appends content to the DOM
  main.append(container);
};

// Render the study set preview card
// Includes the study sets title and number of terms
// Takes the current study set and the sets container as arguments
const createSetPreviewCard = (set, setContainer) => {
  // Container for study set
  const setCard = document.createElement("ul");
  setCard.className = "cardSets";
  // Dynamic attribute used to select a study set during testing.
  setCard.setAttribute("data-cy", set.id);

  // Creates the Study Sets Title element
  const liTitle = document.createElement("li");
  liTitle.textContent = set.title;

  // Creates the Study Sets Number of Terms element
  const liNumberOfTerms = document.createElement("li");
  liNumberOfTerms.textContent = `Terms: ${set.cards.length}`;

  // Adds an event listener to the study set.
  // On click, the current page will clear, and the full study set will be rendered.
  setCard.addEventListener("click", () => {
    document.querySelector("main").innerHTML = "";
    renderFlashCards(set.cards);
  });

  // Appends elements to the set preview
  setCard.append(liTitle, liNumberOfTerms);
  // Appends the preview to the container
  setContainer.append(setCard);
};

// Iterates through the study sets and dynamically creates their DOM elements.
const createCardSets = () => {
  // Creates a container for the sets
  const setContainer = document.createElement("ul");
  setContainer.className = "setContainer";
  // Iterates though the sets and creates their dom elements dynamically
  cardSets.forEach((set) => createSetPreviewCard(set, setContainer));
  return setContainer;
};
