// Create the 4 LI items for displayShowDetails and displayMovieDetails
function bottomListItems(text, prop) {
    
  const li = document.createElement("li");
  const spanLi = document.createElement("span");
  spanLi.className = "text-secondary";
  const spanLiText = document.createTextNode(text);
  spanLi.append(spanLiText);
  li.append(spanLi);  
  const liText = document.createTextNode(prop);
  li.append(liText);

  return li;
}

export default bottomListItems;