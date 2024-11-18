import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c9e14.firebaseapp.com",
  projectId: "reactchat-c9e14",
  storageBucket: "reactchat-c9e14.appspot.com",
  messagingSenderId: "1082356739376",
  appId: "1:1082356739376:web:e841d34a4bc91d5f916cf5"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()