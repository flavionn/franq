<script setup>

const props = defineProps({
	items: [ Object, String ],
})

</script>

<template lang="pug">

div
	IndexCard(
		v-for="item in props.items"
		:data="item"
		)

</template>
