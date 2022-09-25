import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import ChatbarOptions from "../../Utility/chatbar_options/ChatbarOptions";
import stringAvatar from "../../Utility/avatar";
import "./ChatbarHeader.css";

const ChatbarHeader = ({ lastMessage }) => {
  const [chatOptions, setChatOptions] = useState(false);
  const [chatHeaderData, setchatHeaderData] = useState("");
  const { roomId } = useParams();

  const handleChatOptions = () => {
    chatOptions ? setChatOptions(false) : setChatOptions(true);
  };

  useEffect(() => {
    (async () => {
      if (roomId) {
        const docSnap = await getDoc(doc(db, "rooms", roomId));
        if (docSnap.exists()) {
          setchatHeaderData(docSnap.data());
        }
      }
    })();
  }, [roomId]);

  return (
    <div className="chatbar_header">
      <div className="chatbar_header_left">
        <Avatar alt="image_avatar" {...stringAvatar(chatHeaderData.name)} />
        <div className="chatbar_header_data">
          <p>{chatHeaderData.name}</p>
          <p>
            Last seen{" "}
            {lastMessage &&
              new Date(lastMessage.data.timestamp?.toDate()).toUTCString()}
          </p>
        </div>
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
