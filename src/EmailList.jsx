import "./css/emailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import useFirestoreCollection from "./useFireCollection";
import { useState } from "react";
const EmailList = () => {
  const [, setUnreadCount] = useState(0);

  const handleDataUpdate = (newData) => {
    const newUnreadCount = newData.filter((item) => !item.data.isRead).length;
    setUnreadCount(newUnreadCount);
  };
  const email = useFirestoreCollection("emails", handleDataUpdate);
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
