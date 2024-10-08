import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const url = "https://bookstoreapp-backend-8aa9.onrender.com";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      
      setTimeout(() => {
        window.location.reload();
        
      }, 3000);
    } catch (error) {
      toast.error("Error" + error);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
