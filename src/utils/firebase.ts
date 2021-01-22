import app from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD402C26CQtaSTjbOwfLfijBcaCo2HGIWM",
  authDomain: "clubpetro-desafio.firebaseapp.com",
  projectId: "clubpetro-desafio",
  storageBucket: "clubpetro-desafio.appspot.com",
  messagingSenderId: "263593701103",
  appId: "1:263593701103:web:727d0c916b192f0fafb51a"
};

app.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };