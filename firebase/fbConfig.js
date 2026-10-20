// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1PTzpJKuyasBb68EFK16H3v43xvo-NPc",
  authDomain: "petcom-fea27.firebaseapp.com",
  databaseURL: "https://petcom-fea27-default-rtdb.firebaseio.com/",
  projectId: "petcom-fea27",
  storageBucket: "petcom-fea27.firebasestorage.app",
  messagingSenderId: "91003235336",
  appId: "1:91003235336:web:986599a30b0305870e35bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };