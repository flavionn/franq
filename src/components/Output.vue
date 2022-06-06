<script setup>

import { ref } from 'vue'

const output_open = ref(true)

const props = defineProps({
	left: Boolean,
})

</script>

<template lang="pug">

div(
	class="fixed top-0 w-1/4 text-xs z-100 h-full"
	:class="left ? 'left-0' : 'right-0'"
	)
	div(
		class="bg-yellow-400 p-2 flex justify-between cursor-pointer"
		@click="output_open = !output_open"
		)
		div output for dev
		div
			div(
				v-if="output_open"
				class="i-mdi-chevron-down"
				)
			div(
				v-else=""
				class="i-mdi-chevron-up"
				)
	div(
		class="bg-gray-900 h-full overflow-y-scroll"
		:class="output_open ? 'block' : 'hidden'"
		)
		pre(class="p-8 text-white")
			slot

</template>
