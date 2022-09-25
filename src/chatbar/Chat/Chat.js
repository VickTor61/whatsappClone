import { useStateValue } from "../../StateProvider";
import "./Chat.css";

const Chat = ({ messages }) => {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="chat_container">
      {messages &&
        messages.map((message) => (
          <div key={message.id} className={`chat ${message.data.name === user.displayName && "chat_receiver"}`}>
            <h4 className="chat_name">{message.data.name}</h4>
            <div className="chat_info">
              <p>{message.data.message}</p>
              <span>
                {new Date(message.data.timestamp?.toDate()).toUTCString()}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chat;
