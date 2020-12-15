import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALpOjqMvdTN_udTfB4HcnqeM5U9UyPWbw",
    authDomain: "crud-react-4a711.firebaseapp.com",
    projectId: "crud-react-4a711",
    storageBucket: "crud-react-4a711.appspot.com",
    messagingSenderId: "211596802193",
    appId: "1:211596802193:web:b6e27d6986f9a911022730"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };