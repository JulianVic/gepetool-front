import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import SidebarHeader from "./SidebarHeader";
import ChatPersona from "./CardChat";
import CreateChannelButton from "./CreateChannelButton";

const Sidebar = ({ setModalCreateChannel, channel, setChannel, setMessages }) => {
  const [channels, setChannels] = useState([]);

  const getChannels = async () => {
    try {
      const response = await clienteAxios.get("/channels/");
      setChannels(response.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }ñl
  };

  const waitForNewChannel = async () => {
    try {
      const response = await clienteAxios.get("/channels/wait4newchannel");
      const newChannel = response.data;
      
      setChannels((prevChannels) => [...prevChannels, newChannel]);

    } catch (error) {
      console.error("Error waiting for new channel:", error);
    }finally{
      waitForNewChannel();

    }
  };

  useEffect(() => {
    getChannels();
    waitForNewChannel();

    return () => {
      clienteAxios.get("/channels/cancelwait4newchannel");
    };

  }, []);

  return (
    <>
      <div className="w-1/4 bg-white border-r border-gray-300">
        <SidebarHeader />
        <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
          <CreateChannelButton setModalCreateChannel={setModalCreateChannel} />
          <div className="mt-4">
            {channels.map((chat, index) => (
              <ChatPersona
                key={index}
                name={chat.name}
                description={chat.description}
                id={chat._id}
                channel={channel}
                setChannel={setChannel}
                setMessages={setMessages}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;