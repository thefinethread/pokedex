<template>
	<div class="flex flex-wrap gap-12 justify-center items-center m-auto">
		<PokemonCard
			v-for="(pokemon, index) in pokemons"
			:key="pokemon.name"
			:pokemon="pokemon"
			:id="index + 1"
		/>
	</div>
</template>

<script setup>
import {} from 'vue';
import PokemonCard from './PokemonCard.vue';

const props = defineProps(['pokemons']);

console.log(props.pokemons);
</script>
