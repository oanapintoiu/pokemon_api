async function getPokemonData(pokemonName) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const response = await fetch(apiUrl);

  return response.json();
}

module.exports = { getPokemonData };
