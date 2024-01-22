import SidebarHeader from "./SidebarHeader";
import ChatPersona from "./CardChat";
import CreateChannelButton from "./CreateChannelButton";

const Sidebar = ({ setModalCreateChannel }) => {
  return (
    <>
      <div className="w-1/4 bg-white border-r border-gray-300">
        <SidebarHeader />
        <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
          <CreateChannelButton 
            setModalCreateChannel={setModalCreateChannel}
          />
          <ChatPersona/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
