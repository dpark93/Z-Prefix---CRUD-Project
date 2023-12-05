
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPUjcJte0FbZZm2KjRiUPZGyJVsSs0ZWo",
  authDomain: "z-prefix-47bbe.firebaseapp.com",
  projectId: "z-prefix-47bbe",
  storageBucket: "z-prefix-47bbe.appspot.com",
  messagingSenderId: "105962084034",
  appId: "1:105962084034:web:f2d6b9ee781dad542d4d5b",
  measurementId: "G-3R7TYG8MHX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()