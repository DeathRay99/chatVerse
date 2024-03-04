import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Functions, getFunctions } from "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyCwXsMlFPFzkvnG01OTGbyzxo-aHa33jDc",
  authDomain: "chatverse-7d9d3.firebaseapp.com",
  projectId: "chatverse-7d9d3",
  storageBucket: "chatverse-7d9d3.appspot.com",
  messagingSenderId: "870593796656",
  appId: "1:870593796656:web:9727bad2e6900e2eb06bf5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);
const functions = getFunctions(app);

export {db, auth, functions};
