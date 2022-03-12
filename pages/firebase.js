import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC7Wtg9VFVcRobuvHyWiVwbJ676mizHacY",
  authDomain: "clone-next-9a194.firebaseapp.com",
  projectId: "clone-next-9a194",
  storageBucket: "clone-next-9a194.appspot.com",
  messagingSenderId: "938756271041",
  appId: "1:938756271041:web:0e8e4f96c01ba3471c1d40",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
