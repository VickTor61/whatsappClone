import { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import ChatbarOptions from "../../Utility/chatbar_options/ChatbarOptions";

import './ChatbarHeader.css';

const ChatbarHeader = () => {
  const [chatOptions, setChatOptions] = useState(false);

  const handleChatOptions = () => {
   chatOptions ? setChatOptions(false) : setChatOptions(true) 
  }

  return (
    <div className="chatbar_header">
      <div className="chatbar_header_left">
        <Avatar alt="image_avatar" />
        {/* user profile */}
      </div>
      <div className="chatbar_header_right">
        <IconButton>
          <VideocamIcon />
        </IconButton>
        <IconButton>
          <CallIcon />
        </IconButton>
        <span className="chatbar_icon_border"></span>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={() => handleChatOptions()}>
          <MoreHorizIcon />
        </IconButton>

        {chatOptions && <ChatbarOptions />}
      </div>
    </div>
  );
};

export default ChatbarHeader;
