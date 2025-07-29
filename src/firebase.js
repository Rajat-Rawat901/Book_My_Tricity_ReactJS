import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ ADD THIS LINE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6t12cijX6dIdCo4v-fJJ-xUW_NnMqpNU",
  authDomain: "device-streaming-3a48b1da.firebaseapp.com",
  projectId: "device-streaming-3a48b1da",
  storageBucket: "device-streaming-3a48b1da.firebasestorage.app",
  messagingSenderId: "697077986762",
  appId: "1:697077986762:web:cc873a21c71c3fece30b33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export { auth };
