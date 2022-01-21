import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDavFUMoMGHrMoL_ZI-QhLn8UWTZP7089U",
    authDomain: "todo-list-react-c3daf.firebaseapp.com",
    projectId: "todo-list-react-c3daf",
    storageBucket: "todo-list-react-c3daf.appspot.com",
    messagingSenderId: "103776494481",
    appId: "1:103776494481:web:bfad0aede56c0208193030"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export { db }