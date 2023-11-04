import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { enableLogging } from "firebase/database";

enableLogging(true);

const firebaseConfig = {
  apiKey: "AI********************_DoE",
  authDomain: "my-project-******.com",
  projectId: "my-project-******",
  storageBucket: "my-project-******.com",
  messagingSenderId: "34******7",
  appId: "1:34**************923a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);