import io from "socket.io-client"
const socket = io(import.meta.env.SERVER_URL)
export default socket