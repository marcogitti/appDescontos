import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
    apiKey: "AIzaSyANl5VZ-r9umVNA27QQTZcDe6pxbu1xkCY",
  authDomain: "conexaodescontos-4f6e3.firebaseapp.com",
  projectId: "conexaodescontos-4f6e3",
  storageBucket: "conexaodescontos-4f6e3.appspot.com",
  messagingSenderId: "775771427426",
  appId: "1:775771427426:web:fef2b4744c3926fc84b73b"
};

if (!firebase.apps.length) {
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    }

export default firebase;