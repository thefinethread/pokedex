import { POKE_API_URL, POKE_API_RES_LIM } from '@/constants/constants';
import { ref } from 'vue';

const useComposable = () => {
	const pokemons = ref([]);
	const offset = ref(0);
	const loadingMore = ref(false);

	const fetchPokemonsList = async () => {
		try {
			const res = await fetch(
				`${POKE_API_URL}?offset=${offset.value}&limit=${POKE_API_RES_LIM}`
			);
			const pokemonsList = await res.json();

			return pokemonsList;
		} catch (error) {
			console.error(error);
		}
	};

	const fetchPokemonDetails = async ({ results }) => {
		const promisesArr = results.map(async ({ name }) => {
			const res = await fetch(`${POKE_API_URL}/${name}`);
			return await res.json();
		});

		const pokemonsDataList = await Promise.all(promisesArr);

		return pokemonsDataList;
	};

	const updateState = (pokemonsDataList) => {
		const newList = pokemonsDataList.map(({ id, name, types }) => {
			return {
				id,
				name,
				types: types.map((type) => type.type.name),
			};
		});

		pokemons.value = [...pokemons.value, ...newList];
		offset.value += 20;
	};

	const loadMorePokemons = async () => {
		loadingMore.value = true;
		await getPokemons();
		loadingMore.value = false;
	};

	const getPokemons = async () => {
		const pokemonsList = await fetchPokemonsList();
		const pokemonsDataList = await fetchPokemonDetails(pokemonsList);
		updateState(pokemonsDataList);
	};

	return {
		pokemons,
		loadingMore,
		getPokemons,
		loadMorePokemons,
	};
};

export default useComposable;
