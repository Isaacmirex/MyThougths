// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0CxYLQ1pcBNMrkD7FBBO-dTvqwsGumGQ",
  authDomain: "mythogths.firebaseapp.com",
  databaseURL: "https://mythogths-default-rtdb.firebaseio.com",
  projectId: "mythogths",
  storageBucket: "mythogths.appspot.com",
  messagingSenderId: "1035993016728",
  appId: "1:1035993016728:web:9561757917695c940823ed",
  measurementId: "G-JMNP38DE8W"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
// const analytics = getAnalytics(app)