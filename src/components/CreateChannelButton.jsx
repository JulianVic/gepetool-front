const CreateChannelButton = ({ setModalCreateChannel }) => {
  const handleClick = () => {
    setModalCreateChannel(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-3">
      <button
        className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-md"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Create channel
      </button>
    </div>
  );
};

export default CreateChannelButton;
