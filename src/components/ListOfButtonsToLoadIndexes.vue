<template lang="pug">

div(class="grid gap-4 md:grid-cols-2 lg:grid-cols-3")
	ButtonLoadIndexes(
		label="Moedas"
		to="currency"
		icon="i-carbon-currency"
		)

	ButtonLoadIndexes(
		label="Bolsas"
		to="stocks"
		icon="i-carbon-chart-line"
		)

	ButtonLoadIndexes(
		label="Taxas"
		to="taxes"
		icon="i-ant-design-stock-outlined"
		)

</template>
