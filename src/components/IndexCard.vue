<script setup>

import { formatPrice } from '@/utils/getFormatNumber'

const props = defineProps({
	data: Object,
})

</script>

<template lang="pug">

div(class="tracking-tight py-8 border-b border-gray-200")
	div(class="flex justify-between items-start w-full")
		div(class="flex-1 space-y-1")
			div(class="text-xl font-normal") {{ props.data.name }}
			div(
				v-if="props.data.variation"
				class="flex items-center space-x-1 font-semibold"
				:class="props.data.variation > 0 ? 'text-green-500' : 'text-red-500'"
				)
				div(:class="props.data.variation > 0 ? 'i-mdi-arrow-up' : 'i-mdi-arrow-down'")
				span {{ props.data.variation }}

		div(class="i-material-symbols-arrow-forward-ios flex-1 text-xl text-gray-500 mt-1")

		div(class="flex-1 text-xl font-semibold text-right")
			div(v-if="props.data.buy")
				div {{ formatPrice(props.data.buy) }}
				div(class="text-xs uppercase text-gray-500 font-normal") compra

			div(v-if="props.data.points")
				div {{ props.data.points }}
				div(class="text-xs uppercase text-gray-500 font-normal") pontos

</template>
