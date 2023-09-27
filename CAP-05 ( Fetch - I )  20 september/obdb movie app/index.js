const apiKey = 'https://www.omdbapi.com/?i=tt3896198&apikey=86dc90c6&s=';
let red = "Search"
// Load movies when the page loads
window.onload = async () => {
  try {
    const response = await fetch(apiKey+red);
    if (response.ok) {
      const data = await response.json();
      showData(data.Search);
    } else {
      displayErrorMessage('Movies not found!');
    }
  } catch (error) {
    displayErrorMessage('An error occurred while fetching data.');
    console.error(error);
  }
};

document.getElementById('searchButton').addEventListener('click', async () => {
  const movieTitle = document.getElementById('movieInput').value;
  try {
    const response = await fetch(apiKey + movieTitle);
    if (response.ok) {
      const data = await response.json();
      showData(data.Search);
    } else {
      displayErrorMessage('Movies not found!');
    }
  } catch (error) {
    displayErrorMessage('An error occurred while fetching data.');
    console.error(error);
  }
});

function showData(movieData) {
  const movieContainer = document.getElementById('movieContainer');
  movieContainer.innerHTML = '';

  movieData.forEach(element => {
    movieContainer.innerHTML += `
      <div class="movie-card">
        <h2>${element.Title} (${element.Year})</h2>
        <img src="${element.Poster}" alt="${element.Title} Poster">
        <!-- Add more movie details as needed -->
      </div>
    `;
  });
}

function displayErrorMessage(message) {
  const movieContainer = document.getElementById('movieContainer');
  movieContainer.innerHTML = `<p>${message}</p>`;
}