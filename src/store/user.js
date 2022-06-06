const state = () => ({
	data: null
})

const getters = {
	getData(state) {
		return state.data
	},

	isAuthenticated(state) {
		return !!state.data
	}
}

const mutations = {
	setData(state, payload) {
		state.data = payload
	},

	resetData(state) {
		state.data = null
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
}
