import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDd_jCaH-FCNrQRjhXa3qmRiJ82E6BVbKk',
	authDomain: 'free-time-40169.firebaseapp.com',
	databaseURL: 'https://free-time-40169.firebaseio.com',
	projectId: 'free-time-40169',
	storageBucket: 'free-time-40169.appspot.com',
	messagingSenderId: '156955953083',
	appId: '1:156955953083:web:cf35fb1fcdd2bdab56669e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
