<script setup>

import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useStore } from 'vuex'

const store = useStore()
const stocks = computed(() => store.getters['content/getLatestStocks'])

useHead({
	title: 'Página com lista de índices de bolsas de valores pelo mundo',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Bolsas

IndexesList(:items="stocks")

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
