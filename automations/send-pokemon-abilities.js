const request = require("../functions/request-get");
const requestPost = require("../functions/request-post");
const transform = require("../data-transformations/transform-pokemon");

async function run() {
  const pokemon = await request("https://pokeapi.co/api/v2/pokemon/ditto");

  const pokemonAbilities = pokemon.data.abilities;

  for (const ability of pokemonAbilities) {
    const transformedAbility = await transform(ability);

    const response = await requestPost(transformedAbility);

    console.log(response);
  }
}

run();
