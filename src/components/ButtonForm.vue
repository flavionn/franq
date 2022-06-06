<script setup>

const props = defineProps({
	label: String,
	isProcessing: Boolean,
})

</script>

<template lang="pug">

button
	template(v-if="!isProcessing")
		span {{ label }}

	template(v-else="")
		Spinner(strokeColor="!stroke-white")

</template>
