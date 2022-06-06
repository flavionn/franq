import { api } from '.'

export const getQuotations = () => {
	return api.get('finance/quotations')
}

export const getTaxes = () => {
	return api.get('finance/taxes')
}
