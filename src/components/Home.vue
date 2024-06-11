<template>
	<main class="m-auto flex-1 py-40 flex flex-col items-center">
		<PokemonList
			v-if="pokemons.length && pokemons[0].hasOwnProperty('id')"
			:pokemons="pokemons"
		/>
		<Loader v-else />
		<button
			v-if="pokemons.length && !loadingMore"
			v-on:click="loadMorePokemons"
			class="w-40 py-3 mt-20 rounded-lg bg-red-700 text-white shadow-2xl"
		>
			Load More
		</button>
		<Loader :is-full-screen="false" v-if="loadingMore" />
	</main>
</template>

<script setup>
import { onMounted } from 'vue';
import PokemonList from './PokemonList.vue';
import Loader from './Loader.vue';
import usePokemon from '@/composables/usePokemon';

const { pokemons, loadingMore, getPokemons, loadMorePokemons } = usePokemon();

onMounted(() => {
	getPokemons();
});
</script>
