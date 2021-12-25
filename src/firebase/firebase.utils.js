import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// config from firebase when project is created
// With config, firebase knows that this app is connected to your firebase account and database
const config = {
  apiKey: "AIzaSyAafr4rPlH5ZG8T62-028clTPt72EeNicQ",
  authDomain: "ecommerce-app-c6df8.firebaseapp.com",
  projectId: "ecommerce-app-c6df8",
  storageBucket: "ecommerce-app-c6df8.appspot.com",
  messagingSenderId: "127622869498",
  appId: "1:127622869498:web:5e44d6c1c50fc5700f7443",
  measurementId: "G-G0KXGH6DVW"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Gives the access to new google auth from firebase authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// provider takes few param with setCustomParameters method, we set here prompt: 'select_account' which means that we to always trigger the google pop up whenever we use this google auth for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'});

//signInWithPopup basically provides multiple popups for many corporates like twitter, google, fb etc, to configure to use google sign up popup with firebase, go to firebase, authentication, and select google as sign-in providers, follow the steps and it will be set. 
//In here we basically pass in the google auth which is provider so popup will be google type 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;