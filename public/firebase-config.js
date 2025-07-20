// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinwAoVmEkM84qx5dm7CHTFXuiA7YVIqA",
  authDomain: "pebble-931e4.firebaseapp.com",
  projectId: "pebble-931e4",
  storageBucket: "pebble-931e4.firebasestorage.app",
  messagingSenderId: "815458818586",
  appId: "1:815458818586:web:da3ad57c93e0b9ee9b0fa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the instances for other modules to import
export { app, auth, db };