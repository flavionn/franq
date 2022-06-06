<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'

const store = useStore()
const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

useHead({
	title: 'Desafio Franq',
})

</script>

<template lang="pug">

div(
	v-if="isAuthenticated"
	class="p-8 space-y-8"
	)
	PageTitle Olá
	div Escolha uma das opções abaixo.
	ListOfButtonsToLoadIndexes

WelcomeScreen(v-else="")

</template>
