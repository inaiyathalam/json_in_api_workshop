// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Select elements
const pokemonSearchInput = document.getElementById('pokemon-search');
const searchButton = document.getElementById('search-button');
const pokemonInfo = document.getElementById('pokemon-info');

// Function to fetch and display Pokémon data
const fetchPokemonData = () => {
  const searchValue = pokemonSearchInput.value.toLowerCase();
  const pokemonUrl = apiUrl + searchValue;

  fetch(pokemonUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      // Display Pokémon information
      pokemonInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height / 10} m</p>
        <p>Weight: ${data.weight / 10} kg</p>
      `;
    })          
    .catch(error => {
      pokemonInfo.innerHTML = `<p>${error.message}</p>`;
    });
};

// Event listener for the search button
searchButton.addEventListener('click', fetchPokemonData);
