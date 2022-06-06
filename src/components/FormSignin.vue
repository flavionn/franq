<script setup>

import useAuth from '@/composables/auth'

const {
	isProcessing,
	form,
	onClickSignin,
} = useAuth()

</script>

<template lang="pug">

form(@submit.prevent="onClickSignin")
	input(
		v-model="form.email"
		type="email"
		placeholder="E-mail"
		required
		)

	input(
		v-model="form.password"
		type="password"
		placeholder="Password"
		required
		)

	ButtonForm(
		label="Entrar"
		:isProcessing="isProcessing"
		)

</template>
