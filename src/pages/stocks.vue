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
	title: 'Página com lista de índices de bolsas de valores pelo mundo',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Bolsas

LoadingScreen(v-if="isProcessing")

IndexesList(
	v-else=""
	:items="data.stocks"
	)

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
