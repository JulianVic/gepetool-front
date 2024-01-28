  import { useState, useEffect } from "react";
  import clienteAxios from "../config/axios";
  import SidebarHeader from "./SidebarHeader";
  import ChatPersona from "./CardChat";
  import CreateChannelButton from "./CreateChannelButton";

  const Sidebar = ({ setModalCreateChannel, channel, setChannel, setMessages }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {

      const getAllChannel = async () => {
        try {
          const res = await clienteAxios.get("/channels/");
          setChats(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getAllChannel();
    }, [chats]);

    return (
      <>
        <div className="w-1/4 bg-white border-r border-gray-300">
          <SidebarHeader />
          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
            <CreateChannelButton setModalCreateChannel={setModalCreateChannel} />
            <div className="mt-4">
              {chats.map((chat, index) => (
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
          </div> {}
      </>
    );
  };

  export default Sidebar;
