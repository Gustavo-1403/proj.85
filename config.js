import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAE6l9CGrklmoEN4pPirjhZGu0M069ezyM",
  authDomain: "proj-78-fe22f.firebaseapp.com",
  projectId: "proj-78-fe22f",
  storageBucket: "proj-78-fe22f.appspot.com",
  messagingSenderId: "747012343734",
  appId: "1:747012343734:web:2723740b525bd24e452317",
  measurementId: "G-YYTBSZLHNG"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
