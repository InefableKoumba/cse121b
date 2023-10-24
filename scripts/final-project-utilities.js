export const displayMovie = (movie, container) => {
  container.innerHTML += `
      <div class="">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3 class="text-center mt-2 text-lg font-semibold">${movie.Title} (${movie.Released})</h3>
      </div>
    `;
};
