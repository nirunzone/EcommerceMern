// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7vHAAfbbNwbhanf0zeQbvn98LYoQbtPo",
  authDomain: "joybells-aa84c.firebaseapp.com",
  projectId: "joybells-aa84c",
  storageBucket: "joybells-aa84c.appspot.com",
  messagingSenderId: "936580484785",
  appId: "1:936580484785:web:df5693005cb8e9011a5c90",
  measurementId: "G-SMDV6K8MG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);