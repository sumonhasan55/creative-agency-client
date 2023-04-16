// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ0u6QfVhsoRKq96UMNxL5XxGmXurVl3o",
  authDomain: "creative-agency-71442.firebaseapp.com",
  projectId: "creative-agency-71442",
  storageBucket: "creative-agency-71442.appspot.com",
  messagingSenderId: "274873368230",
  appId: "1:274873368230:web:0000c04100c96c1ddbbe67",
  measurementId: "G-GL1GWZY1VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;