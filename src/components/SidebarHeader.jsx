import clienteAxios from "../config/axios";
import { useState, useEffect } from "react";
const SidebarHeader = () => {
const [numberChats, setNumberChats] = useState([]);

const getNumberChats = async () => {
  setInterval(async () => {
    try {
      const response = await clienteAxios.get("/channels/");
      setNumberChats(response.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  }
  , 10000);
}
useEffect(() => {
  getNumberChats();
}
, []);




  return (
    <>
      <div className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-500 text-white">
        <h1 className="text-2xl font-semibold">Chats</h1>      
        <div className="flex items-center">
          <span className="mr-2">{numberChats.length} chats</span>
         </div>
      </div>
    </>
  );
};

export default SidebarHeader;
