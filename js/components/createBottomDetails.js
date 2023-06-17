// Create repeat bottom section for movie and TV details show pages
// It's so little code I could have duplicated it for movies and tv details
function createBottomDetails(div, type) {
  const h2Bottom = document.createElement("h2");
  const h2BottomText = document.createTextNode(`${type} Info`);
  h2Bottom.append(h2BottomText);
  div.append(h2Bottom);

  return div;
}

export default createBottomDetails;