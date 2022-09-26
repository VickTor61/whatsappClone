import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { onSnapshot, collection, query, doc, orderBy } from "firebase/firestore";
import db from "../firebase";
import ChatbarHeader from "./chatbarHeader/ChatbarHeader";
import CharbarFooter from "./chatbarFooter/CharbarFooter";
import Chat from "./Chat/Chat.js"
import "./Chatbar.css";

const Chatbar = () => {
  const [messages, setMessages] = useState("");
  const roomId = useParams("roomId");

  useEffect(() => {
    try {
      const docRef = doc(db, "rooms", roomId.roomId);
      const colRef = collection(docRef, "messages");

      const collectionName = query(colRef, orderBy("timestamp", "asc"));
      const unsub = onSnapshot(collectionName, (querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((d) => ({
            id: d.id,
            data: d.data(),
          }))
        );
      });

      return () => {
        unsub();
      };
    } catch (e) {
      console.log("No internet");
    }
  }, [roomId]);







  return (
    <div className="chatbar">
     <ChatbarHeader lastMessage={messages[messages.length - 1]} />
     <Chat messages={messages} />
     <CharbarFooter />
    </div>
  );
};

export default Chatbar;
