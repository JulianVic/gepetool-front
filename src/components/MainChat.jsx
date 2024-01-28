import Input from "./Input";
import InputMessage from "./InputMessage";
import OutputMessage from "./OutputMessage";
import NameContact from "./NameContact";
import { useEffect } from "react";
import socket from "../socket/socket.route";
const MainChat = ({ messages, setMessages, channel }) => {
  useEffect(() => {
    // Escuchar el evento receiveMessage del servidor
    socket.on("receiveMessage", (data) => {
      setMessages([...messages, { from: data.from, body: data.body, isAuthor: data.from == socket.id}]);
    });
  
    // Limpiar el listener cuando el componente se desmonta pero que sea verdad
    return () => {
      socket.off("receiveMessage");
    };
  }, [
    messages,    setMessages,
  ]);
  
  return (
    <>
      <div className="flex-1">
        <NameContact
          channel={channel}
        />
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {

            messages ? messages.map((msg, index) => (
              msg.isAuthor ?
              <OutputMessage
                key={index}
                from={msg.from}
                body={msg.body}
              /> :
              <InputMessage
                key={index}
                from={msg.from}
                body={msg.body}
              />
            )): null
          }
        </div>
        <Input
          messages={messages}
          setMessages={setMessages}
          channel={channel}
         />
      </div>
    </>
  );
};

export default MainChat;
