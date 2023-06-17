// Background image for details pages
function displayBackgroundImage(type, path) {
  const overlayDiv = document.createElement("div");
  overlayDiv.className = "overlay"
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${path})`;

  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

export default displayBackgroundImage;