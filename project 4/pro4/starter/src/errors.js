//DO NOT CHANGE ANYTHING IN THIS FILE//

//This file is responsible for creating errors for our form
const showError = (message) => {
  const form = document.querySelector("form");
  const existingError = document.querySelector(".error");

  if (!existingError) {
    const error = document.createElement("p");
    error.textContent = message;
    error.style.color = "red";
    error.className = "error";
    form.appendChild(error);
  } else if (existingError.textContent !== message) {
    existingError.textContent = message;
  }
};

export { showError };
