<script setup>

import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useStore } from 'vuex'

const store = useStore()
const currencies = computed(() => store.getters['content/getLatestCurrencies'])

useHead({
	title: 'Página com lista de cotações de moedas',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Moedas

IndexesList(:items="currencies")

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
