import { useState, useEffect } from "react";
import db from "../firebase";
import { onSnapshot, collection, query, addDoc } from "firebase/firestore";
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import SidebarForm from "./sidebarForm/SidebarForm";
import SidebarChat from "./sidebarChat/SidebarChat";
import "./Sidebar.css";

const Sidebar = ({userImage}) => {
  const [room, setRoom] = useState([]);

  const createroom = () => {
    const roomName = prompt("Create a room");
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    roomName && writeData(roomName, date);
  };

  const writeData = async (name, timestamp) => {
    try {
      const docRef = await addDoc(collection(db, "rooms"), {
        name,
        timestamp,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    try {
      const collectionName = query(collection(db, "rooms"));
      const unsub = onSnapshot(collectionName, (querySnapshot) => {
        setRoom(
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
  }, []);

  return (
    <div className="sidebar">
      <SidebarHeader userImage={userImage} />
      <SidebarForm />
      <h2 className="sidebar_new_chat" onClick={createroom}>Add new chat</h2>
      <SidebarChat roomList={room} />
    </div>
  );
};

export default Sidebar;
