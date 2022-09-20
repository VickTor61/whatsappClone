// import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

const SidebarChat = ({ roomList }) => {
  function stringToColor(avatarName) {
    let hash = 0;
    let i;

    for (i = 0; i < avatarName.length; i += 1) {
      hash = avatarName.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    const bgColor = stringToColor(name);
    try {
      return {
        sx: {
          bgcolor: bgColor,
        },
        children:
          name.split(" ").length >= 2
            ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
            : `${name.split(" ")[0][0]}`,
      };
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <div className="sidebar_room_container">
      { roomList.map((response) => (
          <div className="sidebar_room" key={response.id}>
            <Avatar {...stringAvatar(response.data.name)} />
            <div className="room_content">
              <h4>{response.data.name}</h4>
              <p>{response.data.timestamp}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SidebarChat;
