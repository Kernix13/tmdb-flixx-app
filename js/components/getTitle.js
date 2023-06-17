import fetchAPIData from "./fetchAPIData.js";

async function getTitle(vidType, vidId, elem) {
  const results = await fetchAPIData(`/${vidType}/${vidId}`);
  console.log(results)

  const span = document.createElement("span")
  span.className = "text-secondary"
  if (vidType === "movie") {
    span.append(document.createTextNode(` ${results.title}`))
    elem.append(span)
  } else {
    span.append(document.createTextNode(` ${results.name}`))
    elem.append(span)
  }

  return elem;
}

export default getTitle;