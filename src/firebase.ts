// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChoiZJiZeWbv988iL_s_ZrerGDSfEv_Lc",
  authDomain: "loginauth-ts.firebaseapp.com",
  projectId: "loginauth-ts",
  storageBucket: "loginauth-ts.appspot.com",
  messagingSenderId: "636967873691",
  appId: "1:636967873691:web:09f5be7bac390928c5ea3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
