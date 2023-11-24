import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')


//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWbAvrPdrIyZoT1qFnSzpkOCtcHKWExPc",
  authDomain: "tvas-6b3cb.firebaseapp.com",
  projectId: "tvas-6b3cb",
  storageBucket: "tvas-6b3cb.appspot.com",
  messagingSenderId: "641643568109",
  appId: "1:641643568109:web:01efc747f7182c1f1325e4",
  measurementId: "G-TFJVBR16MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);