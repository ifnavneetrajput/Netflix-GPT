// Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlzyUTXF0TzQQnTgMGJ-avn8qz8LLzoQo",
  authDomain: "netflixgpt-700e8.firebaseapp.com",
  projectId: "netflixgpt-700e8",
  storageBucket: "netflixgpt-700e8.firebasestorage.app",
  messagingSenderId: "300494197794",
  appId: "1:300494197794:web:e64d11fc0625aa0cf0267b",
  measurementId: "G-BN57EBK18Y",
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
export const auth = getAuth();