<script setup>

import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useStore } from 'vuex'

const store = useStore()
const taxes = computed(() => store.getters['content/getLatestTaxes'])

useHead({
	title: 'Página com lista de taxas de juros no Brasil',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Taxas

TaxesList(:items="taxes")

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
