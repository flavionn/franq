<script setup>

import useAuth from '@/composables/auth'

const {
	isProcessing,
	form,
	onClickSignup,
} = useAuth()

</script>

<template lang="pug">

form(@submit.prevent="onClickSignup")
	input(
		v-model="form.email"
		type="email"
		placeholder="E-mail"
		required
		)

	input(
		v-model="form.password"
		type="password"
		placeholder="Senha"
		minlength="6"
		required
		)

	ButtonForm(
		label="Cadastrar"
		:isProcessing="isProcessing"
		)

</template>
