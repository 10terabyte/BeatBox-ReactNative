// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMAUllzZOl_95SqF9gw6p61axMiqOLVc4",
    authDomain: "beatbox-fed3f.firebaseapp.com",
    databaseURL: "https://beatbox-fed3f-default-rtdb.firebaseio.com",
    projectId: "beatbox-fed3f",
    storageBucket: "beatbox-fed3f.appspot.com",
    messagingSenderId: "484962252809",
    appId: "1:484962252809:web:bd3684f1d90db41200a0d8",
    measurementId: "G-25FRQ6JWME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;