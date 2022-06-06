<script setup>

import { formatDate } from '@/utils/getFormatNumber'

const props = defineProps({
	label: String,
	data: String,
})

</script>

<template lang="pug">

div(class="flex justify-between	tracking-tight	py-8 border-b border-gray-200")
	div(class="text-xl font-normal") {{ props.label }}
	div(class="flex-1 text-xl font-semibold text-right") {{ props.data }}

</template>
