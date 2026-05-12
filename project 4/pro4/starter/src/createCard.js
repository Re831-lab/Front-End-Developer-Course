//DO NOT CHANGE ANYTHING IN THIS FILE//

// This file is responsible for the form that creates a new flashcard.

// This function is responsible for rendering a flashcard.
// It will be called upon form submission to render the newly created card.
import { renderFlashCards } from "./cardsPage.js";
// This function is responsible for showing an error
import { showError } from "./errors.js";
// These functions generate elements for our form and our header element
import {
  createLabel,
  createInput,
  createHeader,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

// This function will generate the create card form
const renderCardForm = (set) => {
  // Create a header for the form
  const h3 = createHeader("h3", "Create Cards", "create_cards");

  // Creates form element
  const cardForm = document.createElement("form");
  // Sets an attribute that will be used to select the form during testing
  cardForm.setAttribute("data-cy", "card_form");

  // Creates a label for the Term input
  const termLabel = createLabel("Term", "termInput");
  // Creates input for the term
  const termInput = createInput("termInput");

  // Creates label for description
  const descriptionLabel = createLabel("Description", "descriptionInput");
  // Creates input for description
  const descriptionInput = createInput("descriptionInput");

  //Creates submit input
  const addCardBtn = createSubmitButton("Add Card");
  // Handle form submission ane errors
  cardForm.addEventListener("submit", (e) => {
    // Prevents forms default behavior
    e.preventDefault();
    // Gets the input values from term and description
    const term = e.target.termInput.value;
    const description = e.target.descriptionInput.value;
    // Handles error if user enters an empty string in any of the inputs
    if (!term && !description) {
      showError("TERM AND DESCRIPTION CANNOT BE EMPTY");
    } else if (!term) {
      showError("TERM CANNOT BE EMPTY");
    } else if (!description) {
      showError("DESCRIPTION CANNOT BE EMPTY");
    } else {
      addCard(term, description, set);
    }
  });

  // Append form elements to the form
  cardForm.append(
    termLabel,
    termInput,
    descriptionLabel,
    descriptionInput,
    addCardBtn
  );

  // Creates a container for the form elements and header
  const container = document.createElement("div");
  container.append(h3, cardForm);

  return container;
};

// Function to add a new card to the data set
const addCard = (term, description, set) => {
  set.push({ term, description });
  renderFlashCards(set, set.length - 1); // Render the new card
};

export { renderCardForm };
