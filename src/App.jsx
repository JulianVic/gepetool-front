import Sidebar from "./components/Sidebar";
import MainChat from "./components/MainChat";
import FirstOfAll from "./components/FirstOfAll";
import ModalCreateChannel from "./components/ModalCreateChannel";

import { useEffect, useState } from "react";
import socket from "./socket/socket.route";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [modalCreateChannel, setModalCreateChannel] = useState(false);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    socket.on("msg", receiveMessage);
    
    return () => {
      socket.off("msg", receiveMessage);
    };
  }, [channel]);

  const receiveMessage = (msg) => {
    setMessages((state) => [...state, msg]);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          setModalCreateChannel={setModalCreateChannel}
          setChannel={setChannel}
        />
        {
          channel ? (
            <MainChat
              message={message}
              messages={messages}
              setMessage={setMessage}
              setMessages={setMessages}
              channel={channel}
            />
          ) : (
            <FirstOfAll />
          )
        }
        {/* <MainChat
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
        /> */}
        {modalCreateChannel && (
          <ModalCreateChannel setModalCreateChannel={setModalCreateChannel} />
        )}
        
      </div>
    </>
  );
};

export default App;
