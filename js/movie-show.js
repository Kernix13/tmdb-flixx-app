import fetchAPIData from "./fetchAPIData.js";
import createCardElements from "./components/createCard.js";

// Display 20 most popular videos for main movies and shows page 
async function displayPopular() {
  
  const type = window.location.pathname;
  
  if (window.location.pathname.includes('shows')) {
    console.log('show: ', type)
    const { results } = await fetchAPIData('tv/popular');
    console.log('tv/popular',)
    console.log(results)
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