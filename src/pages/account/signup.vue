<script setup>

import { useHead } from '@vueuse/head'

useHead({
	title: 'Página de cadastro da aplicação',
})

</script>

<template lang="pug">

ButtonBack

PageTitle Cadastre-se

div(class="space-y-4 text-center")
	FormSignup

	router-link(
		:to="{ name: 'account-signin' }"
		class="block text-green-600"
		) já é cadastrado?

</template>

<route lang="yaml">

meta:
  avoidLoggedIn: true
  layout: margin

</route>
