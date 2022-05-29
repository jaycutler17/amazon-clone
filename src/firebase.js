import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuTioINgZRs5RrtPQardE8wGiQf0sNvSA",
    authDomain: "e-clone-a13e4.firebaseapp.com",
    projectId: "e-clone-a13e4",
    storageBucket: "e-clone-a13e4.appspot.com",
    messagingSenderId: "26359003168",
    appId: "1:26359003168:web:638c8a4c8391e364b6e445",
    measurementId: "G-VJE3FHM56Q"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);

export {db , auth};