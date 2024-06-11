<template>
	<div
		:class="`${
			isFullScreen ? 'h-full' : ''
		} flex w-full bg-blue-100 justify-center items-center flex-col`"
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

// const { isFullScreen } = withDefaults(props, {
// 	isFullScreen: true,
// });
</script>
