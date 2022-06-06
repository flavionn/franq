<script setup>

import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useStore } from 'vuex'

const store = useStore()
const getData = computed(() => store.getters['user/getData'])

useHead({
	title: 'Sua conta',
})

</script>

<template lang="pug">

PageTitle Sua conta

div(class="space-y-1")
	div Você esta logado como

	div(
		v-if="getData"
		class="text-xl font-semibold"
		) {{ getData.email }}

</template>

<route lang="yaml">

meta:
  avoidLoggedOff: true
  layout: margin

</route>
