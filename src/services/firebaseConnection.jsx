import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD9v7CTw6XVxLVgxmjUYsfjBl_APbnJTUA",
    authDomain: "tickets-5bdfc.firebaseapp.com",
    projectId: "tickets-5bdfc",
    storageBucket: "tickets-5bdfc.firebasestorage.app",
    messagingSenderId: "660658781711",
    appId: "1:660658781711:web:8bd1745416b339b1b9ed7a",
    measurementId: "G-PC2EN0KB58"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseapp);
  const db = getFirestore(firebaseapp)

  export {auth, db }