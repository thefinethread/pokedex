<template>
	<div class="flex flex-wrap gap-12 justify-center items-center m-auto">
		<PokemonCard
			v-for="pokemon in pokemons"
			:key="pokemon.id"
			:pokemon="pokemon"
			:id="pokemon.id"
		/>
	</div>
</template>

<script setup>
import {} from 'vue';
import PokemonCard from './PokemonCard.vue';

const { pokemons } = defineProps(['pokemons']);
</script>
