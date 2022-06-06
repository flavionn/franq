<template lang="pug">

div(class="space-y-4")
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
