<template>
	<div class="flex flex-wrap gap-12 justify-center items-center m-auto">
		<PokemonCard
			v-for="pokemon in pokemons"
			:key="pokemon.id"
			:pokemon="pokemon"
		/>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import PokemonCard from './PokemonCard.vue';

const pokemonStore = inject('pokemon-store');
const pokemons = pokemonStore.getAllPokemons();

console.log(typeof pokemons);
</script>
