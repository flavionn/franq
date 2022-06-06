export const formatPrice = (value) => {
	var formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
	return formatter.format(value)
}

export const formatDate = (value) => {
	var newDate = new Date(value)
	return newDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}
