import fetchAPIData from "./components/fetchAPIData.js";
import createDetailsImg from "./components/createImg.js";

const personHeading = document.getElementById("person-name")
const detailsContainer = document.getElementById("person-details")

const topDetailsDiv = document.createElement("div");
topDetailsDiv.className = "top-info";
topDetailsDiv.setAttribute("id", "top-info-text")

async function personDetails() {

  const back = document.getElementById('back');
  const backLink = document.createElement('a');
  backLink.href = "#";
  backLink.className = "btn";
  backLink.append(document.createTextNode("Back to Cast & Crew Page"))
  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
  });
  back.append(backLink);

  const personId = window.location.search.split('=')[1];
  const results = await fetchAPIData(`/person/${personId}`);

  personHeading.append(document.createTextNode(results.name));

  /* TOP DETAILS */
  const detailsTop = document.createElement("div");
  detailsTop.className = "details-person-top";

  const topImgDiv = document.createElement("div");
  topImgDiv.className = "profile-pic";

  // Create the image div & return topImgDiv
  createDetailsImg(topImgDiv, results.profile_path, results.name);
  detailsTop.append(topImgDiv);

  const bday = document.createElement("p");
  const bdaySpan = document.createElement("span");
  bdaySpan.className = "text-secondary";
  bdaySpan.append(document.createTextNode("Birthday"))

  if (results.birthday) {
    bday.append(bdaySpan);
    bday.append(document.createTextNode(`: ${results.birthday}`));
  } else {
    bday.append(bdaySpan);
    bday.append(document.createTextNode(`: N/A`));
  }
  topDetailsDiv.append(bday)

  const birthTown = document.createElement("p");
  const townSpan = document.createElement("span");
  townSpan.className = "text-secondary";
  townSpan.append(document.createTextNode("Place of Birth"))

  if (results.place_of_birth) {
    birthTown.append(townSpan);
    birthTown.append(document.createTextNode(`: ${results.place_of_birth}`));
  } else {
    birthTown.append(townSpan);
    birthTown.append(document.createTextNode(`: N/A`));
  }
  topDetailsDiv.append(birthTown)
  
  const deathday = document.createElement("p");
  const deathSpan = document.createElement("span");
  deathSpan.className = "text-secondary";
  deathSpan.append(document.createTextNode("Death"))
  if (results.deathday) {
    deathday.append(deathSpan);
    deathday.append(document.createTextNode(`: ${results.deathday}`));
    topDetailsDiv.append(deathday)
  }

  const homepage = document.createElement("a");
  homepage.className = "person-link";
  if (results.homepage) {
    homepage.setAttribute("href", `${results.homepage}`)
    homepage.setAttribute("target", "_blank");
    homepage.className = "person-link";
    homepage.append(document.createTextNode("Homepage"))
    topDetailsDiv.append(homepage)
  }

  const imdb = document.createElement("a");
  if (results.imdb_id) {
    imdb.setAttribute("href", `https://www.imdb.com/name/${results.imdb_id}/`)
    imdb.setAttribute("target", "_blank")
    imdb.className = "person-link";
    imdb.append(document.createTextNode("IMDb page"))
  }
  topDetailsDiv.append(imdb)

  const bioHdr = document.createElement("h3");
  bioHdr.className = "bio-header";
  bioHdr.append(document.createTextNode("Biography"));

  const bio = document.createElement("div");
  bio.className = "biography";
  const text = results.biography.split('\n')

  text.forEach(p => {
    if (results.biography !== "") {
      const bioP = document.createElement("p");
      bioP.append(document.createTextNode(p))
      bio.append(bioP)
    } else {
      const bioP = document.createElement("p");
      bioP.append(document.createTextNode("No biographical information available."))
      bio.append(bioP)
    }
  })
  topDetailsDiv.append(bioHdr)
  topDetailsDiv.append(bio)

  detailsTop.append(topDetailsDiv);
  detailsContainer.append(detailsTop)
}

export default personDetails;