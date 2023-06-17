// Display Movie and TV Details Image
function createDetailsImg(div, img_path, title) {
  
  const topImg = document.createElement("img");
  topImg.className = "card-img-top";

  if(img_path) {
    topImg.setAttribute("src", `https://image.tmdb.org/t/p/w500${img_path}`);
  } else {
    topImg.setAttribute("src", "../images/no-image.jpg");
  }

  topImg.setAttribute("alt", title);
  div.append(topImg);
  
  return div;
}

export default createDetailsImg;