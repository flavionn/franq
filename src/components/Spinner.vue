<script setup>

const props = defineProps({
	strokeColor: String
})

</script>

<template lang="pug">

svg(
	class="spinner w-7 h-auto"
	viewBox="0 0 50 50"
	)
	circle(
		class="path stroke-white"
		:class="strokeColor"
		cx="25"
		cy="25"
		r="20"
		fill="none"
		stroke-width="5"
		)

</template>

<style lang="sass">

.spinner
	animation: rotate 2s linear infinite
	z-index: 2

	& .path
		stroke-linecap: round
		animation: dash 2s ease-in-out infinite

@keyframes rotate
	100%
		transform: rotate(360deg)

@keyframes dash
	0%
		stroke-dasharray: 1, 150
		stroke-dashoffset: 0

	50%
		stroke-dasharray: 90, 150
		stroke-dashoffset: -35

	100%
		stroke-dasharray: 90, 150
		stroke-dashoffset: -124

</style>
