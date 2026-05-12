let aboutMeData = null;
let projectsData = [];


// 1. Fetch Data


async function fetchAboutMe() {
  try {
    const response = await fetch('./data/aboutMeData.json');
    if (!response.ok) throw new Error('Failed to fetch aboutMeData.json');
    aboutMeData = await response.json();
    populateAboutMe(aboutMeData);
  } catch (error) {
    console.error('Error fetching aboutMe data:', error);
  }
}

async function fetchProjects() {
  try {
    const response = await fetch('./data/projectsData.json');
    if (!response.ok) throw new Error('Failed to fetch projectsData.json');
    projectsData = await response.json();
    populateProjectCards(projectsData);
    populateSpotlight(projectsData[0]); 
  } catch (error) {
    console.error('Error fetching projects data:', error);
  }
}


// 2.About Me Section

function populateAboutMe(data) {
  const aboutMeDiv = document.getElementById('aboutMe');
  if (!aboutMeDiv) return;

  // use a DocumentFragment for efficient DOM insertion
  const fragment = document.createDocumentFragment();

  // bio paragraph
  const bio = document.createElement('p');
  bio.textContent = data.aboutMe || 'No bio available.';
  fragment.appendChild(bio);

  // headshot container+image
  const headshotContainer = document.createElement('div');
  headshotContainer.className = 'headshotContainer';

  const img = document.createElement('img');
  img.src = data.headshot || '';
  img.alt = 'Profile headshot';

  // Fallback ifimage fails to load
  img.onerror = function () {
    this.src = 'https://via.placeholder.com/200x200?text=Photo';
    this.alt = 'Profile photo placeholder';
  };

  headshotContainer.appendChild(img);
  fragment.appendChild(headshotContainer);

  aboutMeDiv.appendChild(fragment);
}


// 3. Project Cards


function populateProjectCards(projects) {
  const projectList = document.getElementById('projectList');
  if (!projectList) return;

  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'projectCard';
    card.id = project.project_id || '';

    // Background image- fallback to placeholder if missing
    const cardImage = project.card_image || '../images/card_placeholder_bg.webp';
    card.style.backgroundImage = `url('${cardImage}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';

    // Project name
    const title = document.createElement('h4');
    title.textContent = project.project_name || 'Untitled Project';
    card.appendChild(title);

    // Short description- fallback if missing
    const desc = document.createElement('p');
    desc.textContent = project.short_description || 'No description available.';
    card.appendChild(desc);

    // Click listener-update spotlight on card click
    card.addEventListener('click', () => {
      populateSpotlight(project);
    });

    fragment.appendChild(card);
  });

  projectList.appendChild(fragment);
}


// 4. Project Spotlight

function populateSpotlight(project) {
  const spotlight = document.getElementById('projectSpotlight');
  const spotlightTitles = document.getElementById('spotlightTitles');
  if (!spotlight || !spotlightTitles) return;

  // Background image- fallback to placeholder if missing
  const spotlightImage = project.spotlight_image || '../images/spotlight_placeholder_bg.webp';
  spotlight.style.backgroundImage = `url('${spotlightImage}')`;
  spotlight.style.backgroundSize = 'cover';
  spotlight.style.backgroundPosition = 'center';

  // Clear previous content
  spotlightTitles.innerHTML = '';

  const fragment = document.createDocumentFragment();

  // Project name- put directly in spotlightTitles as h3
  const heading = document.createElement('h3');
  heading.textContent = project.project_name || 'Untitled Project';
  fragment.appendChild(heading);

  // Long description- fallback if missing
  const desc = document.createElement('p');
  desc.textContent = project.long_description || 'No description available.';
  fragment.appendChild(desc);

  // External link- fallback if missing
  const link = document.createElement('a');
  link.href = project.url || '#';
  link.textContent = 'Click here to see more...';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  fragment.appendChild(link);

  spotlightTitles.appendChild(fragment);
}

// 5. Scroll Arrows


function setupScrollArrows() {
  const arrowLeft  = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const projectList = document.getElementById('projectList');

  if (!arrowLeft || !arrowRight || !projectList) return;

  const SCROLL_AMOUNT = 300;
  const DESKTOP_BREAKPOINT = 768;

  arrowLeft.addEventListener('click', () => {
    const isDesktop = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches;
    if (isDesktop) {
      // Desktop: scroll UP
      projectList.scrollBy({ top: -SCROLL_AMOUNT, behavior: 'smooth' });
    } else {
      // Mobile: scroll LEFT
      projectList.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    }
  });

  arrowRight.addEventListener('click', () => {
    const isDesktop = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches;
    if (isDesktop) {
      // Desktop: scroll DOWN
      projectList.scrollBy({ top: SCROLL_AMOUNT, behavior: 'smooth' });
    } else {
      // Mobile: scroll RIGHT
      projectList.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    }
  });
}

// 6. Contact Form — Live Character Count

const MAX_CHARS = 300;

function setupCharacterCount() {
  const textarea     = document.getElementById('contactMessage');
  const charDisplay  = document.getElementById('charactersLeft');
  if (!textarea || !charDisplay) return;

  textarea.addEventListener('input', () => {
    const count = textarea.value.length;
    charDisplay.textContent = `Characters: ${count}/300`;

    // Turn red when over limit
    if (count > MAX_CHARS) {
      charDisplay.classList.add('error');
    } else {
      charDisplay.classList.remove('error');
    }
  });
}

// 7. Contact Form — Validation

const ILLEGAL_CHARS_REGEX = /[^a-zA-Z0-9@._-]/;
const VALID_EMAIL_REGEX   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function showError(errorDivId, message) {
  const errorDiv = document.getElementById(errorDivId);
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
  }
}

function clearError(errorDivId) {
  const errorDiv = document.getElementById(errorDivId);
  if (errorDiv) {
    errorDiv.textContent = '';
  }
}


function validateEmail(email) {
  if (!email) {
    showError('emailError', 'Email address is required.');
    return false;
  }
  if (ILLEGAL_CHARS_REGEX.test(email)) {
    showError('emailError', 'Email contains invalid characters. Only letters, numbers, @, ., _, and - are allowed.');
    return false;
  }
  if (!VALID_EMAIL_REGEX.test(email)) {
    showError('emailError', 'Please enter a valid email address (e.g. name@example.com).');
    return false;
  }
  clearError('emailError');
  return true;
}

function validateMessage(message) {
  if (!message) {
    showError('messageError', 'Message is required.');
    return false;
  }
  if (ILLEGAL_CHARS_REGEX.test(message)) {
    showError('messageError', 'Message contains invalid characters. Only letters, numbers, @, ., _, and - are allowed.');
    return false;
  }
  if (message.length > MAX_CHARS) {
    showError('messageError', `Message is too long. Please keep it under ${MAX_CHARS} characters.`);
    return false;
  }
  clearError('messageError');
  return true;
}


function setupFormValidation() {
  const form = document.getElementById('formSection');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    const email   = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    const emailValid   = validateEmail(email);
    const messageValid = validateMessage(message);

    if (emailValid && messageValid) {
      alert('Your message has been submitted successfully!');
      form.reset();
      // Reset character counter
      const charDisplay = document.getElementById('charactersLeft');
      if (charDisplay) charDisplay.textContent = 'Characters: 0/300';
    }
  });
}

// 8. Initialize Everything
async function init() {
  await fetchAboutMe();
  await fetchProjects();
  setupScrollArrows();
  setupCharacterCount();
  setupFormValidation();
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);