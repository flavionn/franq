import useNotification from '@/composables/notification'
import { getQuotations, getTaxes } from '@/api/finance'
import { reactive, ref } from 'vue'

export default function useFinance() {
	const { notification } = useNotification()

	const isProcessing = ref(false)

	const data = reactive({
		currencies: '',
		stocks: '',
		taxes: '',
	})

	const onLoadQuotations = async () => {
		isProcessing.value = true

		await getQuotations()
		.then((response) => {
			const { currencies, stocks } = response.data.results

			data.currencies = currencies
			data.stocks = stocks

			delete data.currencies.source
		})
		.catch((e) => {
			notification(e, 'error')
		})

		isProcessing.value = false
	}

	const onLoadTaxes = async () => {
		isProcessing.value = true

		await getTaxes()
		.then((response) => {
			const { results } = response.data

			data.taxes = results
		})
		.catch((e) => {
			notification(e, 'error')
		})

		isProcessing.value = false
	}

	return {
		isProcessing,
		onLoadQuotations,
		onLoadTaxes,
		data,
	}
}
