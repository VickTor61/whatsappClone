// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import stringAvatar from "../../Utility/avatar";
import "./SidebarChat.css";

const SidebarChat = ({ roomList }) => {

  return (
    <div className="sidebar_room_container">
      { roomList.map((response) => (
         <Link to={`rooms/${response.id}`} key={response.id} className="sidebar_room">
            <Avatar {...stringAvatar(response.data.name)} />
            <div className="room_content">
              <h4>{response.data.name}</h4>
              <p>last message</p>
            </div>
         </Link>
        ))}
    </div>
  );
};

export default SidebarChat;
