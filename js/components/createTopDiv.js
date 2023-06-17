// Create the top section main div for movie and TV shows details pages
function createTopDetailsDiv(div, arr) {
  const h2top = document.createElement('h2');
  h2top.append(document.createTextNode(arr[0]));
  div.append(h2top);

  const rating = document.createElement("p");
  const icon = document.createElement("i");
  icon.className = "fas fa-star text-primary"
  rating.append(icon);
  rating.append(document.createTextNode(` ${arr[1].toFixed(1)} / 10`));
  div.append(rating);

  const release = document.createElement("p");
  release.className = "text-muted";
  release.append(document.createTextNode(`Release Date: ${arr[2]}`));
  div.append(release);

  const overview = document.createElement("p");
  overview.append(document.createTextNode(arr[3]));
  div.append(overview)

  const h3 = document.createElement("h3");
  h3.className = "genres";
  h3.append(document.createTextNode("Genres"));
  div.append(h3);

  const ulTop = document.createElement("ul");

  arr[4].forEach(item => {
    const liTop = document.createElement("li");
    liTop.append(document.createTextNode(item.name));
    ulTop.append(liTop);
  })
  div.append(ulTop);

  const topSocial = document.createElement("div");
  topSocial.className = "social-links";

  const movieLink = document.createElement("a");
  movieLink.className = "btn";
  movieLink.setAttribute("href", arr[5]);
  movieLink.setAttribute("target", "_blank");
  movieLink.append(document.createTextNode(`Visit ${arr[6]} Homepage`));
  div.append(movieLink);

  return div;
}

export default createTopDetailsDiv;