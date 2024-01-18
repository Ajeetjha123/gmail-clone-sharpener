import "./css/emailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import useFirestoreCollection from "./useFireCollection";
const EmailList = () => {
  const email = useFirestoreCollection("emails");
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
