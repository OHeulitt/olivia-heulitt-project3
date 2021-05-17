import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-PvyOZSf83URikYF4Q5OnNhoQRY2GQOM",
    authDomain: "savvy-grans-address-book.firebaseapp.com",
    projectId: "savvy-grans-address-book",
    storageBucket: "savvy-grans-address-book.appspot.com",
    messagingSenderId: "359606207502",
    appId: "1:359606207502:web:84183d1dacb390dc78a85f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
