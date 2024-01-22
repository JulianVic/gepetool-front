import { useState } from "react";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const dataToSend = {
      email,
      password,
    };
    try {
      const res = await clienteAxios.post("/user/login", dataToSend);
      if (!res.status === 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "You are logged in!",
      });

      console.log(res.data);

    } catch (err) {
      if (err.response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong credentials!",
        });
      } else if (err.response.status === 500) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/...')" }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://previews.123rf.com/images/manopjk/manopjk1502/manopjk150200006/36201179-comic-book-globo-de-texto-ilustraci%C3%B3n-del-arte-pop-de-fondo-vectoriales.jpg"
              width="150"
              alt=""
              className="rounded-full shadow-lg"
            />
            <h1 className="mb-2 text-2xl">Gepetool</h1>
            <span className="text-gray-300">Just chilling</span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="email"
                autoComplete="off"
                name="email"
                placeholder="someone@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                autoComplete="off"
                name="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
