import "./css/emailList.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype__option emailtype__option--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__option">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype__option">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
