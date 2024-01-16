import React from "react";
import "./css/emailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
const EmailList = () => {
  return (
    <div className="emailList">
      <EmailListSetting />
      <EmailType />
      <EmailBody
        name="Ajeet Kumar Jha"
        subject="React Course"
        message="We are learning react with redux"
        time="02:23 PM"
      />
    </div>
  );
};

export default EmailList;
