import PropTypes from "prop-types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

const NameContact = ({ channel }) => {

 
  const handleDelete = async () => {
    try {
      const response = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (response.isConfirmed) {
        try {
          const res = await clienteAxios.delete(`/channels/${channel.id}`);
          const status = res.status;
          const message = status === 200 ? "Channel deleted!" : "Something went wrong!";
          const icon = status === 200 ? "success" : "error";

          Swal.fire({
            icon: icon,
            title: status === 200 ? "Success!" : "Oops...",
            text: message,
          });

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error) {
          console.error("Error deleting channel:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }
    } catch (error) {
      console.error("Error displaying SweetAlert:", error);
    }
  };

  return (
    <div className="flex items-center mb-4  p-2 rounded-md justify-between ">
      <div className="bg-white p-4 text-gray-700">
        <h1 className="text-2xl font-semibold">{channel.name}</h1>
      </div>

      <div>
        <button 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

NameContact.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NameContact;
