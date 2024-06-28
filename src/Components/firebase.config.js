import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Kb5lXKekzcqeTHnnEllQqr0Zn9qaggE",
  authDomain: "b-9a10.firebaseapp.com",
  projectId: "b-9a10",
  storageBucket: "b-9a10.appspot.com",
  messagingSenderId: "822382795264",
  appId: "1:822382795264:web:ca09e0451d98a1e22096e5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth ;