import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthSercices from "../Services/Auth.services";
import { toast, ToastContainer } from "react-toastify";
import { FaHouseUser , FaInbox , FaBook , FaSignOutAlt ,FaStore , FaBookOpen} from "react-icons/fa";

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
          <FaBookOpen className="h-6 w-6" />
            <span class="ml-2 text-sm font-bold">Bool Land</span>
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
                to={"/category"}
              >
               <FaInbox className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">Book Categories</span>
              </Link>
             
              <Link
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to={"/book"}
              >
               <FaBook className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">Books</span>
              </Link>
            </div>
            <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
            <Link
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to={"/store"}
              >
               <FaStore className="h-6 w-6" />
                <span class="ml-2 text-sm font-medium">View Store</span>
              </Link>
                
              
             
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
