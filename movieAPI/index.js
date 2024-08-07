const API_KEY = "9ee3708375cc07f23d30eddaaacadb47";
const BASE_URL = "https://api.themoviedb.org/3";

const display = document.getElementById("movie-container");
const inputText = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  let searchValue = inputText.value;
  display.innerHTML = "";
  const request = fetch(
    `${BASE_URL}/search/movie?query=${searchValue}&api_key=${API_KEY}`
  );
  request
    .then((res) => {
      return res.json();
    })
    .then((movies) => {
      console.log(movies);
      for (let movie of movies.results) {
        const title = movie.title;
        const reviews = movie.vote_average;
        const releaseDate = movie.release_date;
        const card = document.createElement("div");
        card.classList.add("card");
        display.appendChild(card);

        const heading = document.createElement("h2");
        heading.textContent = title;
        card.appendChild(heading);

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

        card.appendChild(image);

        const paragraph = document.createElement("p");
        paragraph.textContent = `Release date: ${releaseDate}:${reviews}`;

        card.appendChild(paragraph);
        console.log(
          `${title} (${releaseDate.slice(0, 4)}) has ${Math.floor(
            reviews
          )}/10 stars.`
        );
      }
    })
    .catch((err) => {
      console.dir(err);
    });

  inputText.value = "";
});

inputText.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let searchValue = inputText.value;
    display.innerHTML = "";
    const request = fetch(
      `${BASE_URL}/search/movie?query=${searchValue}&api_key=${API_KEY}`
    );
    request
      .then((res) => {
        return res.json();
      })
      .then((movies) => {
        console.log(movies);
        for (let movie of movies.results) {
          const title = movie.title;
          const reviews = movie.vote_average;
          const releaseDate = movie.release_date;
          const card = document.createElement("div");
          card.classList.add("card");
          display.appendChild(card);

          const heading = document.createElement("h2");
          heading.textContent = title;
          card.appendChild(heading);

          const image = document.createElement("img");
          image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

          card.appendChild(image);

          const paragraph = document.createElement("p");
          paragraph.textContent = `Release date: ${releaseDate}:${reviews}`;

          card.appendChild(paragraph);
          console.log(
            `${title} (${releaseDate.slice(0, 4)}) has ${Math.floor(
              reviews
            )}/10 stars.`
          );
        }
      })
      .catch((err) => {
        console.dir(err);
      });

    inputText.value = "";
  }
});
