<script setup>

import useAuth from '@/composables/auth'

const {
	onClickSignout,
	isProcessing,
} = useAuth()

</script>

<template lang="pug">

LoadingScreen(v-if="isProcessing")

div(class="flex bg-white justify-between px-16 py-8 fixed bottom-0 w-full")
	router-link(:to="{ name: 'index' }")
		div(class="i-carbon-home icon")

	router-link(:to="{ name: 'account' }")
		div(class="i-carbon-user icon")

	a(
		@click="onClickSignout"
		class="cursor-pointer"
		)
		div(class="i-carbon-logout icon")

</template>

<style lang="sass" scoped>

.icon
	@apply text-3xl
	@apply transition-colors
	@apply hover:text-green-500

.router-link-active,
.router-link-exact-active
	@apply text-green-500

</style>
