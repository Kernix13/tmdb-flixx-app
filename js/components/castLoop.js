function castLoop(obj, tp) {

  obj.arr.map(person => {
    const personId = person.id;
 
    const castCard = document.createElement('div');
    castCard.className = "card cast-card";

    // Start weak profiles
    const li = document.createElement("li");
    li.className = "card"
    if (!person.profile_path) {

      const nameLink = document.createElement('a');
      nameLink.setAttribute("href", `people-details.html?id=${personId}`);
      nameLink.className = "person-link";

      nameLink.append(document.createTextNode(person.name));
      li.append(nameLink)

      const p = document.createElement("p");
      const pText = document.createTextNode(`${person.character}`); // 2
      p.append(pText);

      li.append(p);
      obj.arr2.push(li) 
      return;
    } 
    obj.arr2.forEach(item => {
      obj.elem.append(item)
    })
    // End weak profiles

    // Start full profiles
    const nameLink = document.createElement('a');
    nameLink.setAttribute("href", `people-details.html?id=${personId}`);
    nameLink.className = "person-link";
    nameLink.append(document.createTextNode(person.name));

    const image = document.createElement("img");
    
    if(person.profile_path) {
      image.setAttribute("src", `https://image.tmdb.org/t/p/w300${person.profile_path}`);
    } else {
      image.setAttribute("src", "./images/no-image.jpg");
      image.setAttribute("width", "300"); // 4
    }
    
    const characterName = document.createElement('p');
    characterName.className = "text-small";
    characterName.append(document.createTextNode(`Character: ${person.character}`));

    castCard.append(image)
    castCard.append(nameLink)
    castCard.append(characterName)
    document.getElementById(`${tp}-cast`).append(castCard)
    document.getElementById(`weak-${tp}-cast`).append(obj.elem);
  })
}

export default castLoop;