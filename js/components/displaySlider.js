import fetchAPIData from "./fetchAPIData.js";
import initSwiper from "../initSwiper.js";

// Slider/Swiper functionality for "/" and "/index.html"
async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing');

  results.forEach(movie => {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";
    const link = document.createElement("a");
    link.setAttribute("href", `movie-details.html?id=${movie.id}`)

    const img = document.createElement("img");
    img.setAttribute("src", `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    img.setAttribute("alt", `${movie.title}`);
    link.append(img);
    swiperSlide.append(link);

    const h4 = document.createElement("h4");
    h4.className = "swiper-rating";
    const icon = document.createElement("i");
    icon.className = "fas fa-star text-secondary";
    h4.append(icon);
    h4.append(document.createTextNode(` ${movie.vote_average} / 10`));
    swiperSlide.append(h4);

    document.querySelector(".swiper-wrapper").append(swiperSlide);

    initSwiper();
  })
}

export default displaySlider;