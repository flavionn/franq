import axios from 'axios'

export const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
	params: {
		format: import.meta.env.VITE_APP_API_FORMAT,
		key: import.meta.env.VITE_APP_API_KEY
	}
})
