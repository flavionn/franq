import { api } from '.'

export const getLatestIndexes = () => {
	return api.get('finance')
}

export const getQuotations = () => {
	return api.get('finance/quotations')
}

export const getTaxes = () => {
	return api.get('finance/taxes')
}
