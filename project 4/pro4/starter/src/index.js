//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for the navigation menu and the initial loading of the project.

//These are all the functions that render the pages
import { renderCardSetsPage } from "./cardSetsPage.js";
import { renderAboutPage } from "./aboutPage.js";
import { renderHomePage } from "./homePage.js";

// Navigation logic
const addListenerToNavigation = () => {
  addNavListener("cardSetPage", renderCardSetsPage);
  addNavListener("aboutPage", renderAboutPage);
  addNavListener("homePage", renderHomePage);
};

// Helper function to add event listeners to navigation items
const addNavListener = (elementId, callback) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", callback);
  }
};

// Initialize the page
// Load the home page
renderHomePage();
// Add event listeners to navigation items
addListenerToNavigation();

