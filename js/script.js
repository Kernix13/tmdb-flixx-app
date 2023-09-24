// Imports for Movie, Show, and Search pages
import displayPopular from "./movie-show.js";
import displayDetails from "./movie-show-details.js";
import displaySlider from "./components/displaySlider.js"
import search from "./search.js";

// Imports for Cast & Crew
import getMovieCredits from "./cast-crew.js"
import personDetails from "./people.js";

// I removed the 'api' property since it is not used in this file
const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1
  }
};

// Highlight active page link - this could go in movie-show.js
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  })
}

// init app
function init() {
  const page = global.currentPage;

  if (['/', '/index.html'].includes(page)) {
    displayPopular();
    displaySlider();
  } else if (page.includes('shows')) {
    displayPopular();
  } else if (page.includes('details')) {
    displayDetails();
  } else if (page.includes('cast-crew')) {
    getMovieCredits();
  } else if (page.includes('people-details')) {
    personDetails();
  } else if (page.includes('search')) {
    search();
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);