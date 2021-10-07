import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzJRX0vz8Rky_NYwvOMnyirCYD9Y2RfYc",
    authDomain: "rfchat-app.firebaseapp.com",
    projectId: "rfchat-app",
    storageBucket: "rfchat-app.appspot.com",
    messagingSenderId: "611416684294",
    appId: "1:611416684294:web:ae0fb794e2bc1a75181087",
    measurementId: "G-KB2B2G42KB"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}