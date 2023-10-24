import { displayMovie } from "./final-project-utilities.js";

let movies = [];

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async () => {
  const movieTitle = document.getElementById("movie-title").value;
  const releaseDate = document.getElementById("release-date").value;
  const genre = document.getElementById("genre").value;

  let url;
  if (movieTitle === "") return;
  if (releaseDate != "" && genre != "") {
    url = `https://www.omdbapi.com/?s=${movieTitle}&type=${genre}&y=${releaseDate}&apikey=4f462afe`;
  } else if (releaseDate != "" && genre == "") {
    url = `https://www.omdbapi.com/?s=${movieTitle}&y=${releaseDate}&apikey=4f462afe`;
  } else if (releaseDate == "" && genre != "") {
    url = `https://www.omdbapi.com/?s=${movieTitle}&type=${genre}&apikey=4f462afe`;
  } else {
    url = `https://www.omdbapi.com/?s=${movieTitle}&apikey=4f462afe`;
  }

  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(url, options);
    movies = (await response.json()).Search;
    console.log(movies);
    const searchResultGrid = document.getElementById("search-result-grid");
    searchResultGrid.innerHTML = "";
    movies.forEach((movie) => {
      displayMovie(movie, searchResultGrid);
    });
  } catch (error) {
    console.error(error);
  }
});
