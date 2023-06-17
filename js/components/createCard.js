// Create card for Movies and TV shows pages
function createCardElements(divId, arr, obj) {
  arr.forEach(item => {
    const card = document.createElement('article');
    card.className = "card";
    const cardHeader = document.createElement("header");

    const link = document.createElement('a');
    link.setAttribute("href", `${obj.type}-details.html?id=${item.id}`);
    
    const img = document.createElement('img');
    if(item.poster_path) {
      img.setAttribute("src", `https://image.tmdb.org/t/p/w500${item.poster_path}`);
    } else {
      img.setAttribute("src", "../images/no-image.jpg");
    }
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", item[obj.title]);
    link.append(img);
    cardHeader.append(link)

    const cardBody = document.createElement('section');
    cardBody.className = "card-body";

    const h3 = document.createElement("h3");
    h3.className = item[obj.title];
    h3.append(document.createTextNode(item[obj.title]));

    const p = document.createElement("p");
    p.className = "card-text";

    const small = document.createElement("small");
    small.className = "text-muted";
    small.append(document.createTextNode(`${obj.release}: ${item[obj.date]}`));

    p.append(small);
    cardBody.append(h3);
    cardBody.append(p);

    card.append(cardHeader);
    card.append(cardBody);

    document.getElementById(divId).append(card);
  })
}

export default createCardElements;