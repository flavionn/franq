<script setup>

import { useHead } from '@vueuse/head'

useHead({
	title: 'Página de login da aplicação',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Bem vindo de volta

div(class="space-y-4 text-center")
	FormSignin

	router-link(
		:to="{ name: 'account-signup' }"
		class="block text-green-600"
		) não tem cadastro?

</template>

<route lang="yaml">

meta:
  avoidLoggedIn: true
  layout: margin

</route>
