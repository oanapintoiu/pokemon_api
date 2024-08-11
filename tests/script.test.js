
const {getPokemonData} = require('../script')

describe ("getPokemonData", () => {
    it("fetches data from API for a given Pokemon name", async () => {
        const data = await getPokemonData("pikachu");
        expect(data.name).toBe("pikachu")
    })
})