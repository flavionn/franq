<template lang="pug">

div(class="lg:flex")
	img(
		src="/hero-image.jpg"
		class="h-65vh object-cover w-full lg:h-100vh lg:w-1/3"
		)

	div(class="lg:w-2/3 lg:flex lg:flex-col lg:justify-center")
		div(class="py-16 space-y-8 mx-auto w-2/3 text-center")
			PageTitle Bem vindo a aplicação

			div(class="flex flex-col items-center space-y-4")
				router-link(
					:to="{ name: 'account-signin' }"
					class="min-w-75 bg-gray-100 py-4 block text-center rounded-full text-lg font-medium transition-colors hover:bg-green-500 hover:text-white lg:min-w-100 lg:text-xl lg:py-6"
					) Clique para fazer login

				router-link(
					:to="{ name: 'account-signup' }"
					class="block text-green-600"
					) ou cadastre-se

</template>
