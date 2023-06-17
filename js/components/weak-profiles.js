function weakProfile(obj) {
  console.log(obj.counter)
  if (obj.counter === 0 && obj.tp === 'tv') {
    obj.tvEl.innerText = "";
    obj.tvEl.classList.remove("weak-heading")
    obj.tvEl.classList.add("zero")
  } else if (obj.counter === 0 && obj.tp === 'movie') {
    obj.movieEl.innerText = "";
    obj.movieEl.classList.remove("weak-heading")
    obj.movieEl.classList.add("zero")
  }
}

export default weakProfile;