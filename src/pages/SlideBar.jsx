import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthSercices from "../Services/Auth.services";
import { toast, ToastContainer } from "react-toastify";
import { FaHouseUser , FaInbox , FaBook , FaSignOutAlt} from "react-icons/fa";

export default function Cards() {
  const navigate = useNavigate();
  const [name, setname] = useState();
  const [image, setimage] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await AuthSercices.checkUser();
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else setname(data.user);
        setimage(data.image);
        
        toast(`Hi ${data.user} 🦄 💯`, {
          theme: "dark",
        });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <>
      <div class="flex fixed h-screen space-x-6">
        <div class="flex flex-col items-center w-44 h-full overflow-hidden text-gray-400 bg-gray-900 ">
          <Link class="flex items-center w-full px-3 mt-3" to={"/dashboard"}>
            <svg
              class="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span class="ml-2 text-sm font-bold">The App</span>
          </Link>
          <div class="w-full px-2">
            <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
              <Link
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to={"/dashboard"}
              >
                <FaHouseUser className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">Dasboard</span>
              </Link>
              <Link
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to={"/"}
              >
               <FaInbox className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">Book Categories</span>
              </Link>
             
              <Link
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to={"/"}
              >
               <FaBook className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">Books</span>
              </Link>
            </div>
            <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
              <a
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                href="#"
              >
                <svg
                  class="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium">Products</span>
              </a>
              <a
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                href="#"
              >
                <svg
                  class="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium">Settings</span>
              </a>
              <button onClick={logOut} 
                className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                
              >
               <FaSignOutAlt className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">Log out</span>
                <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
              </button>
            </div>
          </div>
          <a
            class="flex items-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
            href="#"
          >
           <div className="ml-3">
           <img
                src={`http://localhost:4000/${image}`}
                alt="..."
                className="shadow w-10 rounded-full align-middle border-none"
              />
           </div>
            <span className="ml-2 text-sm font-medium capitalize">{name}</span>
          </a>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
