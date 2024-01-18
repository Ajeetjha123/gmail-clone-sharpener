import "./css/emailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOffIcon from "@mui/icons-material/LabelOff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { markAsRead, openMessage, selectRead } from "./features/mailSlice";
import { useEffect } from "react";
const EmailBody = ({ name, subject, message, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRead = useSelector(selectRead);
  useEffect(() => {
    if (!isRead) {
      dispatch(markAsRead());
    }
  }, [dispatch, isRead]);
  const setMail = () => {
    dispatch(
      openMessage({
        name,
        subject,
        message,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div className="emailbody" onClick={setMail}>
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        {!isRead && <div className="blueDot"></div>}
        <StarBorderIcon />
        <LabelOffIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle_msg">
          <p>
            <b>{subject}</b> {message}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailBody;
