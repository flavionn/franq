import { auth } from '@/plugins/firebase'
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

const actions = {
	async signin({ commit }, { email, password }) {
		const response = await signInWithEmailAndPassword(auth, email, password)
		commit('user/setData', response.user, { root: true })
	},

	async signup({ commit }, { email, password }) {
		const response = await createUserWithEmailAndPassword(auth, email, password)
		commit('user/setData', response.user, { root: true })
	},

	async signout({ commit }) {
		const response = await signOut(auth)
		commit('user/resetData', null, { root: true })
	},

	async currentUser({ commit, dispatch }) {
		return await new Promise((resolve, reject) => {
			onAuthStateChanged(auth, async (user) => {
				if(!user) {
					resolve(undefined)
				} else {
					resolve(user)
					commit('user/setData', user, { root: true })
				}
			})
		})
	},
}

export default {
	namespaced: true,
	actions,
}
