import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const useFirestoreCollection = (collectionName, onDataUpdate) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setData(newData);
        if (onDataUpdate) {
          onDataUpdate(newData);
        }
      }
    );
    return () => unsubscribe();
  }, [collectionName, onDataUpdate]);

  return data;
};

export default useFirestoreCollection;
