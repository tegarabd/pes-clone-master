import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXdlehcFLb4NVeK8zGfaB_NEFVt2zsJqo",
  authDomain: "pes-master-clone.firebaseapp.com",
  projectId: "pes-master-clone",
  storageBucket: "pes-master-clone.appspot.com",
  messagingSenderId: "334172131555",
  appId: "1:334172131555:web:00fc48100a768f4cef35d6",
  measurementId: "G-D6PRKWK8S3"
};

const app = initializeApp(firebaseConfig);

export default app