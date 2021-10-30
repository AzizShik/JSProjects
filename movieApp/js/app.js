const API_KEY = "975c44a3-e5de-473f-8fbd-c4fb9998fca2";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";


getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  document.querySelector('.movies .container .movies__inner').innerHTML = '';

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <div class="movie__img-block">
    <img src="${movie.posterUrl}" alt="${movie.nameRu}"
      class="movie__img">
  </div>
  <div class="movie__info">
    <h3 class="movie__title">${movie.nameRu}</h3>
  <p class="movie__category">${movie.genres.map((genre) => `  ${genre.genre}`)}</p>
    <div class="movie__info-block">
      <span class="movie__country">${movie.countries.map(country => `${country.country}`)}</span>
      <span class="movie__release">${movie.year} </span>
    </div>
    <p class="movie__length">время просмотра ${movie.filmLength}</p>
  </div>
    `;
    document.querySelector('.movies .container .movies__inner').appendChild(movieEl);
  });
}


const form = document.querySelector('.header__search');
const search = document.querySelector('.header__search-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  const apiSerachUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSerachUrl);
  }
  search.value = '';
});