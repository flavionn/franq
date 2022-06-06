<script setup>

import useFinance from '@/composables/finance'
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const {
	onLoadQuotations,
	data,
	isProcessing,
} = useFinance()

onMounted(() => onLoadQuotations())

useHead({
	title: 'Página com lista de cotações de moedas',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Moedas

LoadingScreen(v-if="isProcessing")

IndexesList(
	v-else=""
	:items="data.currencies"
	)

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
