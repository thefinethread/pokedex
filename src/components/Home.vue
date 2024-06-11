<template>
	<main class="m-auto flex-1 py-40 flex flex-col items-center">
		<PokemonList v-if="pokemons.length" />
		<Loader v-else />

		<LoadMoreBtn
			:show-btn="pokemons.length && !loadingMore"
			@click="loadMorePokemons"
		/>

		<Loader :is-full-screen="false" v-if="loadingMore" />
	</main>

	<!-- <PokemonInfo /> -->
</template>

<script setup>
import { inject } from 'vue';
import PokemonList from './PokemonList.vue';
import PokemonInfo from './PokemonInfo.vue';
import LoadMoreBtn from './LoadMoreBtn.vue';
import Loader from './Loader.vue';
import usePokemon from '@/composables/usePokemon';

const pokemonStore = inject('pokemon-store');
const pokemons = pokemonStore.getAllPokemons();

const { loadingMore, loadMorePokemons } = usePokemon(pokemonStore);
</script>
