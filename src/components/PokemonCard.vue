<template>
	<div
		class="w-60 h-80 bg-blue-200 place-self-center rounded-xl flex flex-col justify-between items-center p-4"
	>
		<img
			class="w-32 h-32"
			:src="`${POKE_IMG_URL}${id}.svg`"
			:alt="pokemon.name"
		/>
		<h4 class="text-3xl">
			{{ pokemon.name }}
		</h4>
		<span class="bg-zinc-900 bg-opacity-10 px-4 py-1 rounded-full">
			#{{ id.toString().padStart(3, '0') }}
		</span>
	</div>
</template>

<script setup>
import { POKE_IMG_URL } from '../constants/constants';
const { pokemon, id } = defineProps(['pokemon', 'id']);
</script>
