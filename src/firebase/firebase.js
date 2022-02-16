import * as firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyASvM_QFRh0dOdsNcdtaLa1o-E4tMzRkgc",
    authDomain: "blackbox-61a97.firebaseapp.com",
    projectId: "blackbox-61a97",
    storageBucket: "blackbox-61a97.appspot.com",
    messagingSenderId: "749325103804",
    appId: "1:749325103804:web:f26387ed2c436967b9d6b9",
    measurementId: "G-XZ0Y3NDEBY"
  });



  export default app;

  export const auth = app.auth;

