import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0YVjGE5stJniAMXPmOl-QFcti058Y-Sk",
  authDomain: "identify-e0190.firebaseapp.com",
  projectId: "identify-e0190",
  storageBucket: "identify-e0190.appspot.com",
  messagingSenderId: "819154166060",
  appId: "1:819154166060:web:c76ad805e0055b8c340c89",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const auth = getAuth(app);
// export { db };
