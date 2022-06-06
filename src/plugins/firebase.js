import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyB1OQVtkXe18OXGWKw2_72aAsLZXl6RiSA',
	authDomain: 'franq-7b8f8.firebaseapp.com',
	projectId: 'franq-7b8f8',
	storageBucket: 'franq-7b8f8.appspot.com',
	messagingSenderId: '131434206088',
	appId: '1:131434206088:web:c1470adce5e9c018e9603d'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {
	auth,
}
