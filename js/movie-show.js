import fetchAPIData from "./fetchAPIData.js";
import createCardElements from "./components/createCard.js";

// Display 20 most popular videos for main movies and shows page 
async function displayPopular() {
  
  const type = window.location.pathname;
  
  if (type === '/shows.html') {
    console.log('show')
    const { results } = await fetchAPIData('tv/popular');
    console.log('tv/popular')
    createCardElements("popular-shows", results, {
      type: "tv",
      title: "name",
      date: "first_air_date",
      release: "Air Date"
    })
  } else {
    const { results } = await fetchAPIData('movie/popular');
    createCardElements("popular-movies", results, {
      type: "movie",
      title: "title",
      date: "release_date",
      release: "Release"
    })
  }
}

export default displayPopular;