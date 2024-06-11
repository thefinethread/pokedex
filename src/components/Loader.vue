<template>
	<div
		class="flex h-full w-full bg-blue-100 justify-center items-center flex-col"
	>
		<img :src="pikachu" alt="loading" class="w-20" />
		<p class="font-medium">Loading...</p>
	</div>
</template>

<script setup>
import pikachu from '../assets/images/pikachu-loader.gif';
</script>
