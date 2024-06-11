<template>
	<div
		:class="[
			cardBgColor,
			'w-56 bg-gradient-to-br place-self-center gap-4 rounded-xl flex flex-col justify-between items-center py-6 p-4 shadow-2xl cursor-pointer hover:scale-110 transition-transform',
		]"
	>
		<img class="w-32 h-32" :alt="name" :src="`${POKE_IMG_URL}${id}.svg`" />
		<span class="bg-zinc-900 bg-opacity-10 px-4 py-1 rounded-full">
			#{{ id.toString().padStart(3, '0') }}
		</span>
		<h4 class="text-3xl tracking-wide">
			{{ name }}
		</h4>

		<div class="flex gap-4">
			<span
				v-for="type in types"
				:class="`${pokemonType[type].darkBgColor} p-3 rounded-full shadow-xl`"
				:title="type"
			>
				<img :src="pokemonType[type].img" :alt="type" class="h-4 w-4" />
			</span>
		</div>
	</div>
</template>

<script setup>
import { POKE_IMG_URL } from '../constants/constants';
import pokemonType from '@/utils/pokemonType';

const { pokemon } = defineProps(['pokemon']);

const { types, name, id } = pokemon;

const cardBgColor = `${pokemonType[types[0]].lightBgColorFrom} 
	${
		types.length > 1
			? `${pokemonType[types[1]].lightBgColorTo}`
			: `${pokemonType[types[0]].lightBgColorTo}`
	} `;
</script>
