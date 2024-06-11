import { ref } from 'vue';

const pokemons = ref([]);

const pokemonStore = {
	setPokemons(data) {
		pokemons.value.push(...data);
	},

	getAllPokemons() {
		return pokemons.value;
	},

	getSinglePokemon(id) {
		return pokemons.value.find((pokemon) => pokemon.id === id);
	},
};

export default pokemonStore;
