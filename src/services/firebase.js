import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALm-GJB_zJ52gvDh-pWmN1ObooPfey1pA",
  authDomain: "lights-out-auth.firebaseapp.com",
  projectId: "lights-out-auth",
  storageBucket: "lights-out-auth.appspot.com",
  messagingSenderId: "147671420465",
  appId: "1:147671420465:web:58696bdac062f3b75fcf10",
};

firebase.initializeApp(firebaseConfig);

//set up auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
  return auth.signInWithPopup(provider);
}

function logOut() {
  return auth.signOut();
}

export { auth, signIn, logOut };
