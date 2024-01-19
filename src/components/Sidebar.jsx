import SidebarHeader from "./SidebarHeader";
import ChatPersona from "./CardChat";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 bg-white border-r border-gray-300">
        <SidebarHeader />
        <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
          <ChatPersona/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
