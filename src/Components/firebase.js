import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf1JQ3e6Tjv7zNpGXhOFHTV0sCQ9e12SA",
  authDomain: "my-tesla-clone.firebaseapp.com",
  projectId: "my-tesla-clone",
  storageBucket: "my-tesla-clone.appspot.com",
  messagingSenderId: "406207000369",
  appId: "1:406207000369:web:48b36eb808b91e31078a10",
};

const app = firebase.initializeApp(firebaseConfig);

const authApp = firebase.auth();

export default authApp;
