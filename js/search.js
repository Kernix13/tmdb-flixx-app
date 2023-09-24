import createSuccessMsg from "./search/successMsg.js";
import paginationElements from "./search/pagination.js";
import createCardElements from "./components/createCard.js";
import { showSpinner, hideSpinner } from "./components/spinner.js";

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
    apiKey: '286597a4a3ec86d51dd85f9169f0a70f',
    apiUrl: 'https://api.themoviedb.org/3/'
  }
};

// Search for index.html and search.html
async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  global.search.type = urlParams.get("type");
  global.search.term = urlParams.get("search-term");

  if (global.search.term !== '' && global.search.term !== null) {
   
    const { results, total_pages, page, total_results } = await searchAPIData();

    global.search.page = page;
    global.search.totalPages = total_pages;
    global.search.totalResults = total_results;

    if (global.search.type === "movie" && results.length === 0 || global.search.type === "tv" && results.length === 0) {
    showAlert("No matches found for your search term")
    }

    // display results
    displaySearchResults(results)

  } else {
    showAlert("Please enter a search term", "error")
  }
  
}

// Display Search Results 
function displaySearchResults(results) {
  // Clear previous results
  document.getElementById("search-results").innerHTML = "";
  document.getElementById("search-results-heading").innerHTML = "";
  document.getElementById("pagination").innerHTML = "";

  const searchHeading = document.getElementById("search-results-heading");
  searchHeading.className ="search-results";

  if (global.search.type === "movie" && results.length > 0) {
    console.log(global.search.type)
    createSuccessMsg(results, searchHeading, global.search.totalResults, global.search.term)

    createCardElements("search-results", results, {
      type: "movie",
      title: "title",
      date: "release_date",
      release: "Release"
    })
    showAlert(`${global.search.totalResults} results found for "${global.search.term}"`, "success")

    global.search.totalResults > 20 ? displayPagination() : null;

  } else if (global.search.type === "tv" && results.length > 0) {
    console.log(global.search.type)
    createSuccessMsg(results, searchHeading, global.search.totalResults, global.search.term)

    createCardElements("search-results", results, {
      type: "tv",
      title: "name",
      date: "first_air_date",
      release: "Air Date"
    })
    showAlert(`${global.search.totalResults} results found for "${global.search.term}"`, "success")

    global.search.totalResults > 20 ? displayPagination() : null;
  }
    // if one one result: document.getElementById("search-results")
  if (global.search.type === "movie" && results.length === 1 || global.search.type === "tv" && results.length === 1) {
    document.querySelector(".card").classList.add("card-one");
  }
}

// Create and display pagination for search results
function displayPagination() {

  const pagination = document.createElement("div");
  pagination.className = "pagination";

  const prev = document.createElement("button");
  paginationElements(pagination, prev, "Prev");

  const next = document.createElement("button");
  paginationElements(pagination, next, "Next");

  const pageCounter = document.createElement("div");
  pageCounter.className = "page-counter";
  pageCounter.append(document.createTextNode(`Page ${global.search.page} of ${global.search.totalPages}`))
  pagination.append(pageCounter);

  document.getElementById("pagination").append(pagination);

  // Disable Prev on page 1
  if (global.search.page === 1) {
    prev.setAttribute("disabled", true)
  }
  
  // Disable Next on last page
  if (global.search.page === global.search.totalPages) {
    next.setAttribute("disabled", true)
  }

  // Next btn event listener
  next.addEventListener("click", async () => {
    global.search.page++;
    const { results, total_pages, page, total_results } = await searchAPIData();
    
    displaySearchResults(results)
  })

  // Prev btn event listener
  prev.addEventListener("click", async () => {
    global.search.page--;
    const { results, total_pages, page, total_results } = await searchAPIData();
    
    displaySearchResults(results)
  })

}

// Make request to search
async function searchAPIData() {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`);
  const data = await response.json();

  hideSpinner();
  return data;
}

// Show Alert
function showAlert(message, className) {
  const alertEl = document.createElement("div");
  alertEl.className = `alert ${className}`;
  alertEl.append(document.createTextNode(message));
  document.getElementById("alert").append(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}

export default search;