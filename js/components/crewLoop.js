function crewLoop(obj) {

  obj.arr.forEach(item => {
 
    if (obj.obj[item].length > 0 ) {
      const deptH3 = document.createElement("h3");
      const crew = document.createElement("div");
      if (obj.limited) {
        crew.className = "weak-profiles"
        deptH3.className = "weak-dept-heading text-secondary";
        crew.setAttribute("class", `weak-crew-${obj.tp}`);
      } else {
        deptH3.className = "dept-heading text-secondary";
        crew.setAttribute("class", `crew-${obj.tp}`);
      }
      deptH3.setAttribute("id", `${item}`)
      deptH3.append(document.createTextNode(item))
      
      
      obj.elem.append(deptH3)
      
      for (const arr in obj.obj[item]) {
        const personId = obj.obj[item][arr].id;
        const castCard = document.createElement('div');
        castCard.className = "card crew-card";

        // This is unique only to crewDeptObj
        if (obj.obj[item][arr].profile_path) {
          const image = document.createElement("img");
          image.setAttribute("src", `https://image.tmdb.org/t/p/w200${obj.obj[item][arr].profile_path}`);
          castCard.append(image)
        }

        const nameLink = document.createElement('a');
        const crewJob = document.createElement("p")
        crewJob.className = "text-small"

        nameLink.setAttribute("href", `people-details.html?id=${personId}`);
        nameLink.className = "person-link";
          
        nameLink.append(document.createTextNode(`${obj.obj[item][arr].name}`))
        crewJob.append(document.createTextNode(`${obj.obj[item][arr].job}`))

        castCard.append(nameLink)
        castCard.append(crewJob)
        crew.append(castCard)
      }
      obj.elem.append(crew)
      return obj.elem;
    }
  })
}

export default crewLoop;