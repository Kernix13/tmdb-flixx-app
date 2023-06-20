import fetchAPIData from "./fetchAPIData.js";
import weakProfile from "./components/weak-profiles.js";
import getTitle from "./components/getTitle.js";
import castLoop from "./components/castLoop.js";
import crewLoop from "./components/crewLoop.js";

// 2. Get Movie Credits: /movie/{movie_id}/credits
async function getMovieCredits() {
  const type = window.location.pathname.split('-')[0].slice(1)
  const typeId = window.location.search.split('=')[1];
  const results = await fetchAPIData(`/${type}/${typeId}/credits`);
  console.log(results)

  // Add the movie/show title/name to the top of the cast-crew page
  const castMembersTitle = document.getElementById("cast-members");
  getTitle(type, typeId, castMembersTitle)

  // Remove h3 innerText if no limited profiles for CAST
  const weakMovieCast = document.getElementById("weak-movie-cast-heading");
  const weakTVCast = document.getElementById("weak-tv-cast-heading");
  let noCastProfilePic = 0;
  results.cast.forEach(person => {
    if (!person.profile_path) {
      noCastProfilePic++;
    }
  })

  const weakCastObj = {
    counter: noCastProfilePic,
    tp: type,
    tvEl: weakTVCast,
    movieEl: weakMovieCast
  }
  weakProfile(weakCastObj)

  // Remove h3 innerText if no limited profiles for CREW
  const weakMovieCrew = document.getElementById("weak-movie-crew-heading");
  const weakTVCrew = document.getElementById("weak-tv-crew-heading");
  let noCrewProfilePic = 0;
  results.crew.forEach(person => {
    if (!person.profile_path) {
      noCrewProfilePic++;
    }
  })
  
  const weakCrewObj = {
    counter: noCrewProfilePic,
    tp: type,
    tvEl: weakTVCrew,
    movieEl: weakMovieCrew
  }
  weakProfile(weakCrewObj)
  
  // Full and limited cast profiles
  const weakCastProfiles = [];
  const weakCastUl = document.createElement("ul");
  weakCastUl.className = "weak-profiles";
  const castObj = {
    arr: results.cast,
    str: 'cast',
    arr2: weakCastProfiles,
    elem: weakCastUl
  };
  castLoop(castObj, type)
  /* END CAST */
  
  /* START CREW */
  // Sort crew object by department
  const crewDepartments = [];
  const crewDep = results.crew.map(person => {
    const crewDept = person.department;
    if (!crewDepartments.includes(crewDept)) {
      crewDepartments.push(crewDept);
    }
  })
  crewDepartments.sort();
  const sortedResults = results.crew.sort((a, b) => (a.department > b.department) ? 1 : -1);

  /* ====== cREATE Objects for full and limited crew profiles ====== */
  const crewDeptObj = {};
  const crewDeptObjNoPic = {};

  crewDepartments.forEach(item => {
    crewDeptObj[item] = [];
    crewDeptObjNoPic[item] = [];
  })
  sortedResults.forEach(item => {
    if (crewDeptObj.hasOwnProperty(item.department) && item.profile_path) {
      crewDeptObj[item.department].push(item)
    } else if(crewDeptObj.hasOwnProperty(item.department) && !item.profile_path)
      crewDeptObjNoPic[item.department].push(item)
  })

  /* ===== full crew object for crewLoop function ===== */
  const fullCrew = document.getElementById("full-crew");
    const objFull = {
    arr: crewDepartments,
    obj: crewDeptObj,
    elem: fullCrew,
    tp: type,
    limited: false
  }
  crewLoop(objFull);

  /* ===== limited crew object for crewLoop function ===== */
  const limitedCrew = document.getElementById("limited-crew");
  const objLimited = {
    arr: crewDepartments,
    obj: crewDeptObjNoPic,
    elem: limitedCrew,
    tp: type,
    limited: true
  }
  crewLoop(objLimited);

  // Output paragraph if there are no crew members
  crewDepartments.sort();
  console.log(results)
  if (results.crew.length === 0) {
    const crewTitle = document.getElementById("tv-crew")
    const p = document.createElement("p")
    p.append(document.createTextNode("No crew members found."))
    crewTitle.prepend(p)
  }
  // Output paragraph for tthe number of crew members
  if (results.crew.length >= 1 && !results.crew[0].profile_path) {
    const crewTitle = document.getElementById("full-crew")
    const p = document.createElement("p")
    p.className = "no-full"
    p.append(document.createTextNode(`There are ${results.crew.length} crew members with a full or limited profile.`))
    crewTitle.prepend(p)
  }
}

export default getMovieCredits;