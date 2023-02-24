import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthSercices from "../Services/Auth.services";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/dashboard");
    }
  }, [cookies, navigate]);

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [image, setImage] = useState(null);

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("image",image);
    formdata.append("password", password);
    console.log(formdata);
    try {
      const { data } = await AuthSercices.Register(formdata);
       console.log(data)
       console.log(image);
      if (data) {
        if (data.errors) {
          const { email, password, name } = data.errors;
          
          if (email) generateError(email);
          else if (password) generateError(password);
          else if (name) generateError(name);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="container mx-auto px-16">
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 md:w-8/12 mt-28">
              <form onSubmit={(e) => handleSubmit(e)} enctype="multipart/form-data">
                <div class="mb-6">
                  <input
                    name="name"
                    type="text"
                    class="border border-blue-500 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div class="mb-6">
                  <input
                    name="email"
                    type="text"
                    class="border border-blue-500 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div class="mb-6">
                  <input
                    name="password"
                    type="password"
                    class="border border-blue-500 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => {setpassword(e.target.value)
                    console.log(password);}}
                  />
                </div>
                <div class="mb-6">
                  <div class="flex  items-center justify-start bg-grey-lighter">
                    <label class="w-full  flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase  cursor-pointer hover:bg-blue-500 hover:text-white border border-blue-500">
                      <span className="mt-2 text-base leading-normal ">
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                      </span>
                      <span class="mt-2 text-base leading-normal">
                        Profile Image
                      </span>
                      <input className="hidden" id="dropzone-file" type="file" required onChange={(e) => setImage(e.target.files[0])} />     

                    </label>
                  </div>
                </div>
                <div class="flex justify-between items-center mb-6">
                  <span class="text-gray-800">
                    Already have an account ?
                    <Link to="/login" className="hover:text-blue-500">
                      {" "}
                      Login
                    </Link>
                  </span>
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}

export default Register;
