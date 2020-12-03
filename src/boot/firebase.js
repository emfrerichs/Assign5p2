import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
    apiKey: "AIzaSyAG0YbzXun7wL7balITh-eJtdqXHGWG-tA",
    authDomain: "maverick-5b8f0.firebaseapp.com",
    databaseURL: "https://maverick-5b8f0.firebaseio.com",
    projectId: "maverick-5b8f0",
    storageBucket: "maverick-5b8f0.appspot.com",
    messagingSenderId: "758045395694",
    appId: "1:758045395694:web:bdd94462e2a450004401ff"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
