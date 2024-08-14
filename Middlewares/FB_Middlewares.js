import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBaiaDN-tNYduTct-avaSeTvv898qwv3tU",
    authDomain: "stratus-labs.firebaseapp.com",
    projectId: "stratus-labs",
    storageBucket: "stratus-labs.appspot.com",
    messagingSenderId: "1052313517493",
    appId: "1:1052313517493:web:4e46a832decbfaf3922dfc",
    measurementId: "G-YZTZVFSLDG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const analytics = getAnalytics(app);