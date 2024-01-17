import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZqiGmZayIoqYdFq2pTA4ctb5UkHznLOs",
  authDomain: "clone-react-4871d.firebaseapp.com",
  projectId: "clone-react-4871d",
  storageBucket: "clone-react-4871d.appspot.com",
  messagingSenderId: "881512763209",
  appId: "1:881512763209:web:77ca4d0c9b29a8ac7b5498",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };
