async function getPokemonData(pokemonName) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("Pokemon not found");

  return response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");

 searchInput,addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
 })

  searchButton.addEventListener("click", async () => {
    clearFields();
    try {
    const pokemonNameorId = searchInput.value;
    if (!pokemonNameorId) return;

    const pokemon = await getPokemonData(pokemonNameorId);
    console.log(pokemon.stats);
    console.log('Types:', pokemon.types);
    console.log('Sprites', pokemon.sprites);

    document.getElementById("pokemon-name").textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();
    document.getElementById("sprite").src = pokemon.sprites.front_default;
    document.getElementById("pokemon-id").textContent = `#${pokemon.id}`;
    document.getElementById("weight").textContent = `Weight: ${pokemon.weight}`;
    document.getElementById("height").textContent = `Height: ${pokemon.height}`;
    document.getElementById("hp").textContent= `HP: ${pokemon.stats[0].base_stat}`;
    document.getElementById("attack").textContent= `Attack: ${pokemon.stats[1].base_stat}`;
    document.getElementById("defense").textContent= `Defense: ${pokemon.stats[2].base_stat}`;
    document.getElementById("special-attack").textContent= `Special attack: ${pokemon.stats[3].base_stat}`;
    document.getElementById("special-defense").textContent= `Special defense: ${pokemon.stats[4].base_stat}`;
    document.getElementById("speed").textContent= `Speed: ${pokemon.stats[5].base_stat}`;
    document.getElementById("types").textContent= `Types: ${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1).toLowerCase()}`;
  } catch (error) {
    alert('Pokémon not found');
  }

  function clearFields () {
    document.getElementById("pokemon-name").textContent = '';
    document.getElementById("sprite").src = '';
    document.getElementById("pokemon-id").textContent = '';
    document.getElementById("weight").textContent = '';
    document.getElementById("height").textContent = '';
    document.getElementById("hp").textContent= '';
    document.getElementById("attack").textContent= '';
    document.getElementById("defense").textContent= '';
    document.getElementById("special-attack").textContent= '';
    document.getElementById("special-defense").textContent= '';
    document.getElementById("speed").textContent= '';
    document.getElementById("types").textContent= '';
  } 
  });
});

