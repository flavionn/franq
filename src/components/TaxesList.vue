<script setup>

import { formatDate } from '@/utils/getFormatNumber'

const props = defineProps({
	items: [ Array, String ],
})

</script>

<template lang="pug">

div(v-for="item in props.items")

	TaxCard(
		label="Data"
		:data="formatDate(item.date)"
		)

	TaxCard(
		v-if="item.cdi"
		label="CDI"
		:data="item.cdi + '%'"
		)

	TaxCard(
		v-if="item.selic"
		label="Taxa Selic"
		:data="item.selic + '%'"
		)

	TaxCard(
		v-if="item.daily_factor"
		label="Fator diário"
		:data="item.daily_factor + '%'"
		)

	TaxCard(
		v-if="item.selic_daily"
		label="Taxa Selic diária"
		:data="item.selic_daily + '%'"
		)

	TaxCard(
		v-if="item.cdi_daily"
		label="Taxa CDI diária"
		:data="item.cdi_daily + '%'"
		)

</template>
