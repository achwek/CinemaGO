import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV5VGoV-W7QIZQr_Sn9WQz9gfOdzBqfXs",
  authDomain: "cinemago-74c0c.firebaseapp.com",
  projectId: "cinemago-74c0c",
  storageBucket: "cinemago-74c0c.appspot.com",
  messagingSenderId: "23846083729",
  appId: "1:23846083729:web:cea05b70c3c53bce3db330",
  measurementId: "G-ZV6X9GPSQC"
};
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase; 