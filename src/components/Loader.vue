<template>
	<div
		:class="`${
			isFullScreen ? 'h-full' : ''
		} flex w-full justify-center items-center flex-col my-4`"
	>
		<img :src="pikachu" alt="loading" class="w-20" />
		<p class="font-medium text-zinc-500 tracking-wider">Loading...</p>
	</div>
</template>

<script setup>
import pikachu from '../assets/images/pikachu-loader.gif';

const props = defineProps({
	isFullScreen: {
		default: true,
	},
});
</script>
