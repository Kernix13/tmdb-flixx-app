// Create card for Movies and TV shows pages
function createCastLink(id, type, typeId, typeTitle) {

  const link = document.createElement('a');
  link.setAttribute("href", `${type}-cast-crew.html?id=${typeId}`);
  link.className = "btn"
  const linkText = document.createTextNode(`Go to Cast and Crew Details for ${typeTitle}`);
  link.append(linkText)
    
  document.getElementById(id).append(link);
}

export default createCastLink;