import { firebaseErrors } from '@/constants/firebaseErrors'
import useNotification from '@/composables/notification'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useAuth() {
	const router = useRouter()
	const store = useStore()
	const { notification } = useNotification()

	const isProcessing = ref(false)

	const form = reactive({
		email: '',
		password: '',
	})

	const onClickSignin = () => {
		isProcessing.value = true

		store
		.dispatch('auth/signin', form)
		.then(() => {
			router.push({ name: 'index' })
			isProcessing.value = false
		})
		.catch((error) => {
			notification(firebaseErrors[error.code], 'error')
			isProcessing.value = false
		})
	}

	const onClickSignup = () => {
		isProcessing.value = true

		store
		.dispatch('auth/signup', form)
		.then(() => {
			router.push({ name: 'index' })
			isProcessing.value = false
		})
		.catch((error) => {
			notification(firebaseErrors[error.code], 'error')
			isProcessing.value = false
		})
	}

	const onClickSignout = () => {
		isProcessing.value = true

		setTimeout(() => {
			store
			.dispatch('auth/signout')
			.then(() => {
				router.push({ name: 'index' })
				isProcessing.value = false
			})
			.catch((error) => {
				notification(error.message, 'error')
				isProcessing.value = false
			})
		}, 1000)
	}

	return {
		isProcessing,
		form,
		onClickSignin,
		onClickSignup,
		onClickSignout,
	}
}
