// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdDoyoSoZVlKh_LROASLmZKQvzwMvSif0",
  authDomain: "gustielife2-d0134.firebaseapp.com",
  projectId: "gustielife2-d0134",
  storageBucket: "gustielife2-d0134.firebasestorage.app",
  messagingSenderId: "718126745989",
  appId: "1:718126745989:web:10d0ea37ad5e9862439cec",
  measurementId: "G-Y9PYGGWVGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
