<script setup>

import useFinance from '@/composables/finance'
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const {
	onLoadTaxes,
	data,
	isProcessing,
} = useFinance()

onMounted(() => onLoadTaxes())

useHead({
	title: 'Página com lista de taxas de juros no Brasil',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Taxas

LoadingScreen(v-if="isProcessing")

TaxesList(
	v-else=""
	:items="data.taxes"
	)

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
