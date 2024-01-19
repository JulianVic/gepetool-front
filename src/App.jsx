import Sidebar from "./components/Sidebar";
import MainChat from "./components/MainChat";
import { useEffect, useState } from "react";
import socket from "./socket/socket.route";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("msg", receiveMessage);

    return () => {
      socket.off("msg", receiveMessage);
    };
  }, []);

  const receiveMessage = (msg) => {
    setMessages((state) => [...state, msg]);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <MainChat
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
        />
      </div>
    </>
  );
};

export default App;
