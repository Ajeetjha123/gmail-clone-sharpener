import "./css/sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import MailIcon from "@mui/icons-material/Mail";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={MailIcon}
        title="Inbox"
        number="234"
        isactive={true}
      />
      <SidebarOptions Icon={StarOutlineIcon} title="Starred" number="234" />
      <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" number="234" />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Important"
        number="234"
      />
      <SidebarOptions Icon={SendIcon} title="Sent" number="234" />
      <SidebarOptions Icon={DraftsIcon} title="Drafts" number="234" />
      <SidebarOptions Icon={LabelIcon} title="Category" number="234" />
      <SidebarOptions Icon={DeleteIcon} title="[Map]/Trash" number="234" />
      <SidebarOptions Icon={FindInPageIcon} title="Documents" number="234" />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number="234" />
      <br />
      <h3 className="sidebarOptions__heading">Meet</h3>
      <SidebarOptions Icon={VideocamIcon} title="New Meeting" number="234" />
      <SidebarOptions Icon={KeyboardIcon} title="Join a Meeting" number="234" />
    </div>
  );
};

export default Sidebar;
