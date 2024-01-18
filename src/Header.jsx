import React, { useContext } from "react";
import "./css/header.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AuthContext from "./store/auth-context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="download.png"
          alt="logo"
          style={{ width: "80px", height: "40px" }}
        />
      </div>
      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="search mail..." />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            authCtx.logout();
            navigate("/");
          }}
        >
          <AppsIcon />
        </IconButton>
        <Avatar src="ajeet-icon.jfif" />
      </div>
    </div>
  );
};

export default Header;
