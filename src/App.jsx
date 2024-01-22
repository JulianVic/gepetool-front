import Sidebar from "./components/Sidebar";
import MainChat from "./components/MainChat";
import LoginCard from "./components/LoginCard";
import ModalCreateChannel from "./components/ModalCreateChannel";

import { useEffect, useState } from "react";
import socket from "./socket/socket.route";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [modalCreateChannel, setModalCreateChannel] = useState(false);
  const [chat, setChat] = useState(null);

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
        {/* <LoginCard /> */}
        <Sidebar
          setModalCreateChannel={setModalCreateChannel}
        />
        <MainChat
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
        />
        {modalCreateChannel && (
          <ModalCreateChannel setModalCreateChannel={setModalCreateChannel} />
        )}
        
      </div>
    </>
  );
};

export default App;
