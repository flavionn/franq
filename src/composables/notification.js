import { useToast } from 'vue-toast-notification'

export default function useNotification() {
	const notification = (message, type) => {
		useToast().open({
			message: message,
			type: type,
			position: 'bottom',
		})
	}

	return {
		notification,
	}
}
