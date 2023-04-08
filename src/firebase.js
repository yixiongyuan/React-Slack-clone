import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhXpkTAYVXBX_tRsnPmhMqJDHynpyvF2U",
  authDomain: "slack-clone-zach.firebaseapp.com",
  projectId: "slack-clone-zach",
  storageBucket: "slack-clone-zach.appspot.com",
  messagingSenderId: "228182760411",
  appId: "1:228182760411:web:fde3a4a4a7e91a05d3a5fe"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};
export default firebaseApp;