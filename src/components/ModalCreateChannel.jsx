import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
const ModalCreateChannel = ({ setModalCreateChannel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const closeModal = () => {
    setModalCreateChannel(false);
    setShowError(false);
  };

  const handleCreateChannel = async () => {
    if (name.trim() === "" || description.trim() === "") {
      setShowError(true);
      return;
    }
    const dataToSend = {
      name,
      description,
    };

    try{
        const res = await clienteAxios.post("/channels/", dataToSend);
        const status = res.status;
        const message = !status === 200 ? "Something went wrong!" : "Channel created!";
        const icon = !status === 200 ? "error" : "success";
        
        Swal.fire({
            icon: icon,
            title: !status === 200 ? "Oops..." : "Success!",
            text: message
        });
        
        closeModal();
        
    }catch(err){
        const errorMessages = {
            400: "Channel already exists!",
            500: "Something went wrong!",
        };
        
        const status = err.response.status;
        
        if (errorMessages[status]) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessages[status],
            });
        }
        
    }

  };

  return (
    <>
      <div>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Create a new channel
                    </h3>

                    <div className="mt-2 flex">
                      <p className="text-sm text-gray-500">
                        <label
                          htmlFor="channelName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="channelName"
                          id="channelName"
                          placeholder="Channel name"
                          className="mt-1 focus:ring focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                          onChange={(e) => setName(e.target.value)}
                          autoComplete="off"
                        />
                      </p>
                      <p className="text-sm text-gray-500">
                        <label
                          htmlFor="channelDescription"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          name="channelDescription"
                          id="channelDescription"
                          placeholder="Channel description"
                          className=" mt-1 focus:ring focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 "
                          onChange={(e) =>
                            setDescription(e.target.value)
                          }
                          autoComplete="off"
                        />
                      </p>
                    </div>
                    {showError && (
                      <div className="text-red-500 text-sm font-semibold">
                        <p>Fill the fields</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCreateChannel}
                >
                  Create channel
                </button>

                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateChannel;
