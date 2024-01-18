import "./css/compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { closeSendMessage, incrementInboxNumber } from "./features/mailSlice";
import { useState } from "react";
import FormatColorText from "@mui/icons-material/FormatColorText";
import { db, serverTimestamp } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
const Compose = () => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formSubmit = async (e) => {
    e.preventDefault();
    if (to === "") return alert("Mail ID Required");
    if (subject === "") return alert("Subject is Required");
    if (message === "") return alert("Message is Required");

    try {
      await addDoc(collection(db, "emails"), {
        to,
        subject,
        message,
        timestamp: serverTimestamp(),
      });

      setTo("");
      setSubject("");
      setMessage("");
      dispatch(closeSendMessage());
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while sending the email");
    }
  };
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              type="email"
              placeholder="Recipients"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="compose__footer">
          <div
            className="compose__footerLeft"
            onClick={() => dispatch(incrementInboxNumber())}
          >
            <button>
              Send
              <ArrowDropDown />
            </button>
          </div>
          <div className="compose__footerRight">
            <FormatColorText />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
