async function getPokemonData(pokemonName) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("Pokemon not found");

  return response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");

  searchButton.addEventListener("click", async () => {
    const pokemonNameorId = searchInput.value;
    if (!pokemonNameorId) return;

    const pokemon = await getPokemonData(pokemonNameorId);

    document.getElementById("pokemon-name").textContent = pokemon.name;
    document.getElementById("pokemon-id").textContent = `#${pokemon.id}`
  });
});

module.exports = { getPokemonData };
