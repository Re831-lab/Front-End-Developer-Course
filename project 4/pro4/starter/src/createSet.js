//DO NOT CHANGE ANYTHING IN THIS FILE//

//// This file is responsible for generating the form used to create a new study set.

// This function will be used to render the new study set on submit
import { renderCardSetsPage } from "./cardSetsPage.js";
// This function will render errors
import { showError } from "./errors.js";

// These function create elements for our form
import {
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

// This function generates the form for creating new study sets
const createSetForm = (setCards) => {
  // Generates the new form element
  const form = document.createElement("form");
  // Sets an attribute that will be used to select the form during testing
  form.setAttribute("data-cy", "set_form");
  // Sets the form to invisible
  form.className = "notVisible";

  //Creates the label for the title input
  const label = createLabel("Card Set Title", "titleInput");
  // Creates the input fot the title
  const input = createInput("titleInput");
  const submitButton = createSubmitButton("Submit Set");

  // Adds an event listener to the form.
  // On submission, a new study set will be created.
  form.addEventListener("submit", (e) => submitSet(e, setCards));

  //Adds elements to the form
  form.append(label, input, submitButton);
  return form;
};

// This function creates a new study set.
// It assigns a title to the set and initializes an empty array for cards,
// which can be added later on the flashcards page.
const submitSet = (e, setCards) => {
  // Prevents default form behavior and screen refresh
  e.preventDefault();

  //Get value form title input
  const title = e.target.titleInput.value;

  // Errors if user entered an empty string
  if (!title) {
    showError("TITLE CANNOT BE EMPTY");
  } else {
    //Creates set object
    const id = setCards.length ? setCards[setCards.length - 1].id + 1 : 1;
    //Adds set data
    setCards.push({ id, title, cards: [] });

    //Adds new card set to DOM
    renderCardSetsPage();
  }
};

export { createSetForm };
