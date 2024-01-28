import { useState } from "react";
import socket from "../socket/socket.route";
const Input = ({messages, setMessages, channel}) => {
  const [message, setMessage] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", {
      channelID: channel.id,
      body: message,
      sender: socket.id,
      isAuthor: true,
    });

    setMessage("");
  };
    
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;