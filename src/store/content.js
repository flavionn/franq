import useFinance from '@/composables/finance'

const {
	onLoadLatestIndexes,
	data,
} = useFinance()

const state = () => ({
	latestIndexes: {
		currencies: null,
		stocks: null,
		taxes: null,
	}
})

const getters = {
	getLatestCurrencies(state) {
		return state.latestIndexes.currencies
	},

	getLatestStocks(state) {
		return state.latestIndexes.stocks
	},

	getLatestTaxes(state) {
		return state.latestIndexes.taxes
	},
}

const actions = {
	async loadLatestIndexes({ commit }) {
		await onLoadLatestIndexes()
		.then(commit('setLatestIndexes', data))
	},
}

const mutations = {
	setLatestIndexes(state, payload) {
		state.latestIndexes = payload
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
