import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAb4d4p_sJBlSjH1vr0mZYN8nfr9HeyGSI",
  authDomain: "project-chat-app-e9bf5.firebaseapp.com",
  projectId: "project-chat-app-e9bf5",
  storageBucket: "project-chat-app-e9bf5.appspot.com",
  messagingSenderId: "199336494648",
  appId: "1:199336494648:web:14566bdbc644abf19b08cd"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();