import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADVCvXb7_4kOj4ujnSH8NPxU63l9Fv78I",
  authDomain: "newsapp-bd69a.firebaseapp.com",
  projectId: "newsapp-bd69a",
  storageBucket: "newsapp-bd69a.appspot.com",
  messagingSenderId: "860593361028",
  appId: "1:860593361028:web:11c3ac80e73ed10a1cb2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};