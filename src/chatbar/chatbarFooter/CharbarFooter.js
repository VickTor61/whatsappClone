import React, { useState, useEffect, useCallback } from "react";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import { serverTimestamp, collection, doc, addDoc } from "firebase/firestore";
import { useStateValue } from "../../StateProvider";
import MicIcon from "@mui/icons-material/Mic";
import MoodIcon from "@mui/icons-material/Mood";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "./ChatbarFooter.css";

const CharbarFooter = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const roomId = useParams("roomId");

  const sendMessageHandler =  useCallback( async () => {
    if (chatMessage.length > 0) {
      try {
        const docRef = doc(db, "rooms", roomId.roomId);
        const colRef = collection(docRef, "messages");

        addDoc(colRef, {
          name: user?.displayName,
          message: chatMessage,
          timestamp: serverTimestamp(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setChatMessage("");
    } else {
      console.log(chatMessage);
    }
  }, [chatMessage, roomId.roomId, user?.displayName]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendMessageHandler();
      }
    };

    document.querySelector(".chat_input").addEventListener("keydown", keyDownHandler);

    return () => {
      document.querySelector(".chat_input").removeEventListener("keydown", keyDownHandler);
    };
  }, [sendMessageHandler]);

  return (
    <div className="chatbar_footer">
      <IconButton>
        <MoodIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <input
        type="text"
        className="chat_input"
        value={chatMessage}
        placeholder="Type a message"
        onChange={(e) => setChatMessage(e.target.value)}
        autoComplete="off"
      />
      <IconButton onClick={sendMessageHandler}>
        <SendIcon />
      </IconButton>
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};

export default CharbarFooter;
