import "./css/emailList.css";
import { Avatar, IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";
import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";
const EmailDetail = () => {
  const navigate = useNavigate();
  const mail = useSelector(selectedMail);
  const handelDelete = async (mail) => {
    if (!mail || !mail.name) {
      console.error("Invalid mail object or mail id.", mail.name);
      return;
    }
    const mailDocref = doc(db, "emails", mail.name);
    try {
      await deleteDoc(mailDocref);
      navigate("/mail");
    } catch (err) {
      console.error("error", err);
    }
  };
  return (
    <div className="emaildetails">
      <div className="emailList__setting">
        <div className="emailList__settingLeft">
          <IconButton onClick={() => navigate("/mail")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton onClick={() => handelDelete(mail)}>
            <DeleteSharpIcon />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <p>1-40 of 10,200</p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaildetails__message">
        <div className="emaildetails__header">
          <div className="emaildetails__headerLeft">
            <IconButton>
              <Avatar />
            </IconButton>
            <p>{mail?.name}</p>
          </div>
          <div className="emaildetails__headerRight">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails__middleheader">
          <div className="emaildetails__middleheaderLeft">
            <h4>{mail?.subject}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emaildetails__middleheaderRight">
            <p>{mail?.time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails__body">
          <p>{mail?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
