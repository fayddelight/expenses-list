import { getFirestore, collection } from "@firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrf8Bdf5-1zHUWrtKIYmz-haEV2mVCh0w",
  authDomain: "koolkids-wad-2022.firebaseapp.com",
  projectId: "koolkids-wad-2022",
  storageBucket: "koolkids-wad-2022.appspot.com",
  messagingSenderId: "887301965137",
  appId: "1:887301965137:web:7fd20f24c949b9e8503f70",
  measurementId: "G-JSSDL8JNZV",
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app)

const newDB = collection(db,"expenses");

export default newDB;