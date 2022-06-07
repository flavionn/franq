import useNotification from '@/composables/notification'
import { getLatestIndexes, getQuotations, getTaxes } from '@/api/finance'
import { reactive, ref } from 'vue'

export default function useFinance() {
	const { notification } = useNotification()

	// const isProcessing = ref(false)

	const data = reactive({
		currencies: '',
		stocks: '',
		taxes: '',
	})

	const onLoadLatestIndexes = async () => {
		await getLatestIndexes()
		.then((response) => {
			const { currencies, stocks, taxes } = response.data.results

			data.currencies = currencies
			data.stocks = stocks
			data.taxes = taxes

			delete data.currencies.source
		})
		.catch((e) => {
			notification(e, 'error')
		})
	}

	// const onLoadQuotations = async () => {
	// 	isProcessing.value = true

	// 	await getQuotations()
	// 	.then((response) => {
	// 		const { currencies, stocks } = response.data.results

	// 		data.currencies = currencies
	// 		data.stocks = stocks

	// 		delete data.currencies.source
	// 	})
	// 	.catch((e) => {
	// 		notification(e, 'error')
	// 	})

	// 	isProcessing.value = false
	// }

	// const onLoadTaxes = async () => {
	// 	isProcessing.value = true

	// 	await getTaxes()
	// 	.then((response) => {
	// 		const { results } = response.data

	// 		data.taxes = results
	// 	})
	// 	.catch((e) => {
	// 		notification(e, 'error')
	// 	})

	// 	isProcessing.value = false
	// }

	return {
		onLoadLatestIndexes,
		// isProcessing,
		// onLoadQuotations,
		// onLoadTaxes,
		data,
	}
}
