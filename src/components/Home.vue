<template>
	<main class="m-auto flex-1 py-40">
		<PokemonList
			v-if="pokemons.length && pokemons[0].hasOwnProperty('id')"
			:pokemons="pokemons"
		/>
		<Loader v-else />
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PokemonList from './PokemonList.vue';
import Loader from './Loader.vue';

const pokemons = ref([]);

const fetchPokemons = async () => {
	try {
		const res = await fetch(
			'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
		);
		const { count, next, previous, results } = await res.json();

		pokemons.value = results;
	} catch (error) {
		console.error(error);
	}
};

const fetchPokemonDetails = async () => {
	const promisesArr = pokemons.value.map(({ name }) => {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
			res.json()
		);
	});

	const dataArr = await Promise.all(promisesArr);

	addPokemonsData(dataArr);
};

const addPokemonsData = (data) => {
	pokemons.value = pokemons.value.map((pokemon, index) => {
		const { id, name, sprites, types } = data[index];

		return {
			id,
			name,
			imgUrl: sprites.front_default,
			types: types.map((type) => type.type.name),
		};
	});
};

onMounted(async () => {
	await fetchPokemons();
	fetchPokemonDetails();
});
</script>
