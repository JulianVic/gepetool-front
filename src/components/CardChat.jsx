const CardChat = () => {
  return (
    <>
    <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
              <img
                src="https://placehold.co/200x/2e83ad/ffffff.svg?text=ilyk&font=Lato"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Nobody</h2>
              <p className="text-gray-600">
                {
                  "I'm nobody! Who are you? Are you nobody, too? Then there's a pair of us — don't tell! They'd banish us, you know."
                }
              </p>
            </div>
          </div>
    </>
  )
}

export default CardChat
