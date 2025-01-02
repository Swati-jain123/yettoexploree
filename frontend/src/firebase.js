import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8WVwURTn3uPcH4ourdXxF3gI-z_AYdLc",
  authDomain: "yettoexplore-ddfe2.firebaseapp.com",
  projectId: "yettoexplore-ddfe2",
  storageBucket: "yettoexplore-ddfe2.appspot.com",
  messagingSenderId: "402842935298",
  appId: "1:402842935298:web:dfbc031c31b818ff5bc71b",
  measurementId: "G-8G8XF2B19R"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
