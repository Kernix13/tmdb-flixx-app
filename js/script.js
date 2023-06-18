// Imports for Movie, Show, and Search pages
import displayPopular from "./movie-show.js";
import displayDetails from "./movie-show-details.js";
import displaySlider from "./components/displaySlider.js"
import search from "./search.js";

// Imports for Cast & Crew
import getMovieCredits from "./cast-crew.js"
import personDetails from "./people.js";

const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1
  },
  // NOTE: you should store your key and make requests from a server!
  api: {
    apiKey: 'TMDB_API_KEY',
    apiUrl: 'https://api.themoviedb.org/3/'
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
  switch(global.currentPage) {
    case '/':
    case '/index.html':
      displayPopular();
      displaySlider();
      break;
    case '/shows.html':
      displayPopular();
      break;
    case '/tv-details.html':
    case '/movie-details.html':
      displayDetails();
      break;
    case '/tv-cast-crew.html':
    case '/movie-cast-crew.html':
      getMovieCredits();
      break;
    case '/people-details.html':
      personDetails();
      break;
    case '/search.html':
      search();
      break;
  }
  highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init);