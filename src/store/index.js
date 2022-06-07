import { createStore } from 'vuex'
import auth from './auth'
import content from './content'
import user from './user'

export default createStore({
	modules: {
		auth,
		content,
		user,
	}
})
