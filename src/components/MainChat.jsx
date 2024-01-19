import Input from "./Input";
import InputMessage from "./InputMessage";
import OutputMessage from "./OutputMessage";
import NameContact from "./NameContact";
const MainChat = ({ message, messages, setMessage, setMessages }) => {
  return (
    <>
      <div className="flex-1">
        <NameContact />
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {
            messages ? messages.map((msg, index) => (
              msg.from === "Me" ?
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
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
         />
      </div>
    </>
  );
};

export default MainChat;
