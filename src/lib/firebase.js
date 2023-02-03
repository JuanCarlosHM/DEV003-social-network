import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCGsH8aOrQIqpz0_W8R7KL3bdhZzO07ZFU",
    authDomain: "social-network-6f2a3.firebaseapp.com",
    projectId: "social-network-6f2a3",
    storageBucket: "social-network-6f2a3.appspot.com",
    messagingSenderId: "485519680660",
    appId: "1:485519680660:web:2ad90a44e7fe5021988081"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// public methods 
export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

