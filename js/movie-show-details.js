import fetchAPIData from "./fetchAPIData.js";

// imports for details pages
import displayBackgroundImage from "./components/createBgImg.js";
import createDetailsImg from "./components/createImg.js";
import createTopDetailsDiv from "./components/createTopDiv.js";
import createBottomDetails from "./components/createBottomDetails.js";
import bottomListItems from "./components/bottomList.js";
import prodCompanies from "./components/productionCos.js";
import createSocialLinks from "./components/createSocialLinks.js";
import getVideos from "./components/getVideos.js";
import createCastLink from "./components/createCastLink.js";

const topDetailsDiv = document.createElement("div");
topDetailsDiv.className = "top-info";

let typeTitle = '';

export default async function displayDetails() {
  const type = window.location.pathname.split('-')[0].slice(1)
  const typeId = window.location.search.split('=')[1];
  const results = await fetchAPIData(`/${type}/${typeId}`);
  console.log(results)
  if (type === 'movie') {
    typeTitle = results.title;
  } else {
    typeTitle = results.name;
  }

  if (type === 'tv' && results.languages.includes('en')) {
    getExternalLinks(topDetailsDiv, type);
    getVideos(typeTitle);
    console.log('show')
  } else {
    getExternalLinks(topDetailsDiv, type);
    getVideos(typeTitle);
    console.log('movie')
  }

  // Overlay for background image
  displayBackgroundImage(type, results.backdrop_path)

  /* TOP DETAILS */
  const detailsTop = document.createElement("div");
  detailsTop.className = "details-top";

  const topImgDiv = document.createElement("div");

  // Create the image div & return topImgDiv
  createDetailsImg(topImgDiv, results.poster_path, results.title);
  detailsTop.append(topImgDiv);

  // Create the details for the top of the details page
  if (type === 'movie') {
    const movieArr = [results.title, results.vote_average, results.release_date, results.overview, results.genres, results.homepage, "Movie"];
    createTopDetailsDiv(topDetailsDiv, movieArr);
  } else {
    const tvArr = [results.name, results.vote_average, results.first_air_date, results.overview, results.genres, results.homepage, "Show"];
    createTopDetailsDiv(topDetailsDiv, tvArr);
  }
  detailsTop.append(topDetailsDiv);

  /* BOTTOM DETAILS */
  const detailsBottom = document.createElement("div");
  detailsBottom.className = "details-bottom";
  const ulBottom = document.createElement("ul");

  // Creates the h2 element only
  createBottomDetails(detailsBottom, type);

  /* List items specific to Movies and TV Shows */
  // Movie specific variables
  const budget = results.budget ? `$${results.budget.toLocaleString('en-US')}` : "N/A";
  const revenue = results.revenue ? `$${results.revenue.toLocaleString('en-US')}` : "N/A";
  const runtime = `${results.runtime} minutes`;
  // Show specific variable
  const episodes = results.number_of_episodes ? results.number_of_episodes : "N/A";
  
  if (type === "movie") {
    const liOne = bottomListItems("Budget: ", budget); // 1) Budget LI
    ulBottom.append(liOne);
    const liTwo = bottomListItems("Revenue: ", revenue); // 2) Revenue LI
    ulBottom.append(liTwo);
    const liThree = bottomListItems("Runtime: ", runtime); // 3) Runtime LI
    ulBottom.append(liThree);
    const liFour = bottomListItems("Status: ", results.status); // 4) Status LI
    ulBottom.append(liFour);
  } else {
    const liOne = bottomListItems("Number of Episodes: ", episodes); // 1) # of episodes LI
    ulBottom.append(liOne);
    const liTwo = bottomListItems("Last Air Date: ", results.last_air_date); // 2) Last air date LI
    ulBottom.append(liTwo);
    const liThree = bottomListItems("Last Episode to Air: ", results.last_episode_to_air.name); // 3) Last episode aired LI:
    ulBottom.append(liThree);
    const liFour = bottomListItems("Status: ", results.status); // 4) Show status LI
    ulBottom.append(liFour);
  }
  detailsBottom.append(ulBottom);

  // Heading and final div
  const h4 = document.createElement("h4");
  h4.append(document.createTextNode("Production Companies: "));

  const divList = document.createElement("div");
  divList.className = "list-group";

  // Output names of Production Companies
  prodCompanies(divList, results);

  detailsBottom.append(h4);
  detailsBottom.append(divList);

  if (type === "movie") {
    document.getElementById("movie-details").append(detailsTop);
    document.getElementById("movie-details").append(detailsBottom);
    createCastLink("cast-details", "movie", results.id, results.title);
  } else {
    document.getElementById("show-details").append(detailsTop);
    document.getElementById("show-details").append(detailsBottom);
    createCastLink("cast-details", "tv", results.id, results.name);
  }
}

async function getExternalLinks(div, tp) {
    const id = window.location.search.split('=')[1];

    const externalIds = await fetchAPIData(`/${tp}/${id}/external_ids`);
    const idsArr = [externalIds.facebook_id, externalIds.imdb_id, externalIds.instagram_id, externalIds.twitter_id];
    
    createSocialLinks(div, idsArr)
  }