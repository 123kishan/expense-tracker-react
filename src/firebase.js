// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjUtH_tzKDcTjlcqSzCsSBxNvlH88iygU",
  authDomain: "expense-tracker-master-93001.firebaseapp.com",
  projectId: "expense-tracker-master-93001",
  storageBucket: "expense-tracker-master-93001.appspot.com",
  messagingSenderId: "618127861426",
  appId: "1:618127861426:web:4c6714991cbb4123390bab",
  measurementId: "G-221QMYMY1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage=getStorage(app);