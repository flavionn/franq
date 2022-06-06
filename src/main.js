import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/global.sass'
import 'vue-toast-notification/dist/theme-sugar.css'

import { createApp, computed } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'

import store from './store'
import router from './router'
import { api } from './api'

await store.dispatch('auth/currentUser')

const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

router.beforeEach(async (to, from, next) => {
	if(to.matched.some(record => record.meta.avoidLoggedIn)) {
		if(isAuthenticated.value) {
			next({ name: 'index'})
		} else {
			next()
		}
	} else {
		next()
	}
})

router.beforeEach(async (to, from, next) => {
	if(to.matched.some(record => record.meta.avoidLoggedOff)) {
		if(isAuthenticated.value) {
			next()
		} else {
			next({ name: 'account-signin' })
		}
	} else {
		next()
	}
})

const app = createApp(App)
const head = createHead()

app.use(store)
app.use(router)
app.use(head)
app.mount('#app')
