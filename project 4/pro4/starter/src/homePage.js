//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page
//Imports image for homepage
import homePageImage from "../images/homePage.png";
//Helper functions
import {
  createHeader,
  createElement,
  createImage,
} from "./utilityRenderFunctions.js";

//Renders home page
const renderHomePage = () => {
  //Gets main element
  const main = document.querySelector("main");
  main.innerHTML = "";

  //Creates header element
  const header = createHeader("h1", "Study Night", "home_header");

  //Creates subheader element
  const subHeading = createElement(
    "h2",
    "A Digital Study Solution for the Modern World"
  );

  //Creates elements
  const image = createImage(homePageImage, "Desk of laptops");

  //Container for elements
  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";

  homeContainer.append(header, subHeading, image);
  main.append(homeContainer);
};

export { renderHomePage };