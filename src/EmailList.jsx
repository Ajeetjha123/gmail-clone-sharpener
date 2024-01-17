import React, { useEffect, useState } from "react";
import "./css/emailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
const EmailList = () => {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "emails"), (snapshot) => {
      setEmail(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="emailList">
      <EmailListSetting />
      <EmailType />
      {email.map(({ id, data }) => {
        return (
          <EmailBody
            key={id}
            name={data.to}
            subject={data.subject}
            message={data.message}
            time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
          />
        );
      })}
    </div>
  );
};

export default EmailList;
