const { default: expect } = require("expect");
const { getPokemonData } = require("../script");

describe("getPokemonData", () => {
  it("fetches data from API for a given Pokemon name", async () => {
    const data = await getPokemonData("pikachu");
    expect(data.name).toBe("pikachu");
  });

  it("throws an error if the Pokemon is not found", async () => {
    await expect(getPokemonData("invalidPokemon")).rejects.toThrow(
      "Pokemon not found"
    );
  });
});
