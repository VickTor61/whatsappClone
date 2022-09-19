import { useState, useEffect, useRef } from "react";
import db from "../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import SidebarForm from "./sidebarForm/SidebarForm";
import SidebarChat from "./sidebarChat/SidebarChat";
import "./Sidebar.css";

const Sidebar = () => {
  const [room, setRoom] = useState([]);
  const roomCollection = useRef(collection(db, "rooms"));

  const createroom = () => {
    const roomName = prompt("Create a room");
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

     roomName && writeData(roomName, date)
  }

const writeData = async (name, timestamp) => {
  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      name,
      timestamp
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

useEffect(() => {
    const getRoomdata = async () => {
      const data = await getDocs(roomCollection.current);
      const folderData = await data.docs.map(doc => {
        return {id: doc.id, rooms: doc.data()}
      });
      setRoom(folderData)
    }

    getRoomdata()
}, [roomCollection])

// console.log(room)

  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarForm />
      <h2 className="sidebar_new_chat" onClick={createroom}>Add new chat</h2>
      <div className="sidebar_room_container">
      { room.length !== 0 && room.map(data => <SidebarChat key={data.id} roomName={data.rooms.name} timestamp={data.rooms.timestamp} />)}
      </div>
    </div>
  );
}

export default Sidebar;
