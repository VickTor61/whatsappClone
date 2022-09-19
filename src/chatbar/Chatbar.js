import ChatbarHeader from "./chatbarHeader/ChatbarHeader";
import CharbarFooter from "./chatbarFooter/CharbarFooter";
import Chat from "./Chat/Chat.js"
import "./Chatbar.css";

const Chatbar = () => {
  return (
    <div className="chatbar">
     <ChatbarHeader />

     {/* body */}
     <Chat />
     <CharbarFooter />
    </div>
  );
};

export default Chatbar;
