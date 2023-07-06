import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBBb26DqsZ-5rketIHMe6uiGTPUTHS55o",

  authDomain: "sedihomes-bb1f2.firebaseapp.com",

  projectId: "sedihomes-bb1f2",

  storageBucket: "sedihomes-bb1f2.appspot.com",

  messagingSenderId: "185809614008",

  appId: "1:185809614008:web:0b3c10edf7e1c5e7c9704d",

  measurementId: "G-YMMHFP4W7T",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export const database = getFirestore(app);
export const storage = getStorage(app);


export { auth };
