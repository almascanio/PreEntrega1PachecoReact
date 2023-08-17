import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBpZrCLj_KYdfROMJ3gYLuR9pL3iBSboiE",
    authDomain: "atodomadera-63a5d.firebaseapp.com",
    projectId: "atodomadera-63a5d",
    storageBucket: "atodomadera-63a5d.appspot.com",
    messagingSenderId: "24272096354",
    appId: "1:24272096354:web:8c1aefc96df35a8f62d53b"
};


const app = initializeApp(firebaseConfig);

export const al = getFirestore(app);