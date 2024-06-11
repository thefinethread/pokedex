<template>
	<button
		v-if="showBtn"
		v-on:click="loadMorePokemons"
		class="w-40 py-3 mt-20 rounded-lg bg-red-700 text-white shadow-2xl"
	>
		Load More
	</button>
</template>

<script setup>
const { showBtn, loadMorePokemons } = defineProps([
	'showBtn',
	'loadMorePokemons',
]);
</script>
