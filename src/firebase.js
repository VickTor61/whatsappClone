import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACPUBnwqkmEEJuJGwDN5VaSI4qf2WaDtY",
  authDomain: "whatsapp-clone-37c57.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-37c57-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-37c57",
  storageBucket: "whatsapp-clone-37c57.appspot.com",
  messagingSenderId: "443548221211",
  appId: "1:443548221211:web:27dc95494cd86eb9ee1dbe",
  measurementId: "G-009BFXGMGH"
};
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app);

  export default db