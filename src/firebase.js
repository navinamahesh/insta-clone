// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
/*
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

require("firebase/auth");
*/

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAK5xPEE90ATciKUfH13UCHHLodst7uP3s",
    authDomain: "instagram-clone-react-ea67d.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-ea67d-default-rtdb.firebaseio.com/",
    projectId: "instagram-clone-react-ea67d",
    storageBucket: "instagram-clone-react-ea67d.appspot.com",
    messagingSenderId: "582149829834",
    appId: "1:582149829834:web:f53131b76fb89f566e7033",
    measurementId: "G-TCVN1V2SYY"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};
