<script setup>

const props = defineProps({
	label: String,
	to: String,
	icon: String,
})

</script>

<template lang="pug">

router-link(
	:to="{ name: props.to }"
	class="border border-gray-300 text-gray-700 rounded-md flex flex-col items-center p-4 space-y-2 transition-colors hover:bg-green-500 hover:text-white"
	)
	div(
		:class="props.icon"
		class="text-5xl"
		)
	div(class="text-xl") {{ props.label }}

</template>
