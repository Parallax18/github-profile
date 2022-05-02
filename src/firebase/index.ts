import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRBIdOiNigo29EuBx3n3Zgj8966kkmIQ4",
    authDomain: "changera-test.firebaseapp.com",
    projectId: "changera-test",
    storageBucket: "changera-test.appspot.com",
    messagingSenderId: "408602024553",
    appId: "1:408602024553:web:3ebf467da4e5d7fcb8a0f8"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
