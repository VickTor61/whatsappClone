import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

const SidebarChat = ({ roomName, timestamp }) => {
  const [avatarString, setAvatarString] = useState("");

  async function stringToColor(avatarName) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < avatarName.length; i += 1) {
      hash = avatarName.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  useEffect(() => {
   async function stringAvatar(name) {
   
    const bgColor = await stringToColor(name)
    try {
        if(name.length > 0) {
            return {
                sx: {
                    bgcolor: bgColor,
                },
                children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
            };
            //   setAvatarString(stringAvatar(roomName));
        }
    } catch(e)  {
        console.log("error");
    }
}
 const output = stringAvatar(roomName).then(d => setAvatarString(d))
    
  }, [roomName]);

  return (
    <div className="sidebar_room">
      <Avatar {...avatarString} />
      <div className="room_content">
        <h4>{roomName}</h4>
        <p>{timestamp}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
