// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCszTgZyjtUj7dW5xBBzIJnveqBgaB2PgY",
  authDomain: "database-mail-96572.firebaseapp.com",
  projectId: "database-mail-96572",
  storageBucket: "database-mail-96572.appspot.com",
  messagingSenderId: "211886846440",
  appId: "1:211886846440:web:1aacf164bf96637ef4745d",
  measurementId: "G-NCLK4H3SQM",
  databaseURL:"https://database-mail-96572-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig