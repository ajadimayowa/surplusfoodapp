import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    name: 'Surplus Food App',
    apiKey: "AIzaSyAegImF2nb4zZGAzRJ5BY7D8uMVKD9kv7M",
    authDomain: "surplus-auth-dev.firebaseapp.com",
    databaseURL: "https://surplus-auth-dev-default-rtdb.firebaseio.com",
    projectId: "surplus-auth-dev",
    storageBucket: "surplus-auth-dev.appspot.com",
    messagingSenderId: "941734571714",
    appId: "1:941734571714:web:7bd31d4434726a87bbd55b"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const database = getDatabase();