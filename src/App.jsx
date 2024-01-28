import Sidebar from "./components/Sidebar";
import MainChat from "./components/MainChat";
import FirstOfAll from "./components/FirstOfAll";
import ModalCreateChannel from "./components/ModalCreateChannel";
import { useState } from "react";

const App = () => {
  const [modalCreateChannel, setModalCreateChannel] = useState(false);
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          setModalCreateChannel={setModalCreateChannel}
          channel={channel}
          setChannel={setChannel}
          setMessages={setMessages}
        />
        {
          channel ? (
            <MainChat
              messages={messages}
              setMessages={setMessages}
              channel={channel}
            />
          ) : (
            <FirstOfAll />
          )
        }
        {modalCreateChannel && (
          <ModalCreateChannel setModalCreateChannel={setModalCreateChannel} />
        )}
        
      </div>
    </>
  );
};

export default App;
