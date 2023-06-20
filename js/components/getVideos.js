import fetchAPIData from "../fetchAPIData.js";

// Get additional videos for movie: /movie/{movie_id}/videos
async function getVideos(str) {
  const movieId = window.location.search.split('=')[1];

  const movieVideos = await fetchAPIData(`/movie/${movieId}/videos`);

  const moreVideos = document.getElementById("more-videos")
  const moreVideosUl = document.createElement("ul");
  moreVideosUl.className = "grid";

  // fetch error if language !== 'en'
  if (movieVideos.results.length === 0) return;

  const moreTitle = document.createElement('h2')
  moreTitle.className = "more-title"

  const span = document.createElement("span");
  span.className = "text-secondary";
  span.append(document.createTextNode(str))

  moreTitle.append(document.createTextNode("Watch More YouTube Videos for "))
  moreTitle.append(span)
  moreVideos.append(moreTitle)

  movieVideos.results.forEach(item => {

    const published = item.published_at.split('T')[0];
    const li = document.createElement("li");
    // li.className = "yt-video";
    li.className = "card yt-video";

    const div = document.createElement("div");
    div.className = "text-center";

    const type = document.createElement("p");
    type.className = "extra-details";
    type.append(document.createTextNode(item.type));
    div.append(type)

    const link = document.createElement("a")
    link.className = "btn"
    link.setAttribute("href", `https://www.youtube.com/watch?v=${item.key}`)
    link.setAttribute("target", "_blank")
    const shortLinkText = item.name.length < 35 ? item.name : `${item.name.slice(0, 33)}...`;
    link.append(document.createTextNode(shortLinkText));
    div.append(link);

    const date = document.createElement("p");
    date.className = "published"
    date.append(document.createTextNode(`Published on ${published}`));
    div.append(date);

    li.append(div)
    moreVideosUl.append(li)
    moreVideos.append(moreVideosUl)
  })
  // get results.key, results.name, results.type where results.site = YouTube
}

export default getVideos;