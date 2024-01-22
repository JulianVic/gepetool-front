const FirstOfAll = () => {
  return (
    
    <div className="flex flex-col flex-1 h-full overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
                <h3 className="text-gray-700 text-3xl font-medium">Why to use Gepetool</h3>
            </div>
            <div className="mt-4">
                <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75"></div>
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">Chat</h4>
                        <div className="text-gray-500">Real time chat</div>
                    </div>
                    </div>
                </div>
                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-orange-600 bg-opacity-75"></div>

                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">Why not?</h4>
                        <div className="text-gray-500">
                        You can use it for free
                        </div>
                    </div>
                    </div>
                </div>

                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                    </div>
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">
                            School objetives
                        </h4>
                        <div className="text-gray-500">
                            The teacher might fail me
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </div>


    
  );
};

export default FirstOfAll;
