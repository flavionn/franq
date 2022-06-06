<template lang="pug">

div(class="space-y-16")
	img(
		src="/hero-image.jpg"
		class="h-65vh object-cover w-full"
		)

	div(class="text-center space-y-8")
		PageTitle Bem vindo a aplicação

		div(class="flex flex-col items-center space-y-4")
			router-link(
				:to="{ name: 'account-signin' }"
				class="bg-gray-100 py-6 block w-2/3 text-center rounded-full text-xl font-medium transition-colors hover:bg-green-500 hover:text-white"
				) Clique para fazer login

			router-link(
				:to="{ name: 'account-signup' }"
				class="block text-green-600"
				) ou cadastre-se

</template>
