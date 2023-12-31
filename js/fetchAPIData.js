import { showSpinner, hideSpinner } from "./components/spinner.js"

// Fetch data
async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  hideSpinner();
  return data;
}

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

export default fetchAPIData;