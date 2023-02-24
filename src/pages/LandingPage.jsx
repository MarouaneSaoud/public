import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div class="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
          <div class="bg-gray-200 px-4 py-4">
            <div class="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
              <div>
                <a
                  href="#"
                  class="inline-block py-2 text-gray-800 text-2xl font-bold"
                >
                  Stats.
                </a>
              </div>

              <div>
                <div class="hidden md:block">
                  <a
                    href="#"
                    class="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
                  >
                    How it Works
                  </a>
                  <a
                    href="#"
                    class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                  >
                    Solutions
                  </a>

                  <a
                    href="#"
                    class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                  >
                    Desktop
                  </a>
                </div>
              </div>

              <div class="hidden md:block">
                <Link
                  to="/login"
                  class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <div class="bg-gray-200 md:overflow-hidden">
            <div class="px-4 py-16">
              <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                <h1 class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                  Welcome to the Admin Portal for{" "}
                  <span class="text-blue-400">Smia dial lweb site</span>
                </h1>

                <p class="text-gray-600 md:text-xl md:px-18">
                  As an administrator of this website, you have the power to
                  control the content and products available for customers to
                  purchase. Here, you will find all the tools you need to manage
                  your bookstore, such as product listings, inventory, orders,
                  and customer accounts. We are dedicated to providing our
                  customers with the best possible experience, and your
                  administrative duties enable us to do this. We appreciate your
                  hard work and dedication to keeping our bookstore running
                  smoothly.
                  <br />
                  <strong class="text-gray-600">
                    Thank you for being part of the [Smia dial lprojet] family!
                    We are excited to have you here as part of our team.
                  </strong>
                  <br />
                </p>

                <div class="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div>

                <div class="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"></div>
              </div>
            </div>

            <svg
              class="fill-current bg-gray-200 text-white hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill-opacity="1"
                d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div class="max-w-4xl -mt-80 rounded-3xl  mx-auto bg-white shadow-lg relative z-20 hidden md:block">
            <div class="h-20 -z-10  w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10"></div>

            <div class="h-5 w-5 -z-10 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"></div>

            <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
            <div class="flex h-96 mb-12">
              <div class="w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg">
                <div class="text-center mb-10">
                  <div class="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
                  <div class="h-2 rounded-full bg-blue-800"></div>
                </div>

                <div class="text-center mb-10">
                  <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
                  <div class="h-2 rounded-full bg-gray-300"></div>
                </div>

                <div class="text-center mb-10">
                  <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
                  <div class="h-2 rounded-full bg-gray-300"></div>
                </div>

                <div class="text-center">
                  <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
                  <div class="h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div class="flex-1 py-6 px-8">
                <div class="flex flex-wrap -mx-4">
                  <div class="w-2/3 px-4">
                    <div class="flex flex-wrap -mx-4 mb-10">
                      <div class="w-1/4 px-4">
                        <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                          <div class="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto"></div>
                          <div class="h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                      <div class="w-1/4 px-4">
                        <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                          <div class="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto"></div>
                          <div class="h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                      <div class="w-1/4 px-4">
                        <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                          <div class="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto"></div>
                          <div class="h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                      <div class="w-1/4 px-4">
                        <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                          <div class="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
                          <div class="h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    </div>

                    <div class="h-32 percentage mb-10 pt-2">
                      <div class="h-4 bg-gray-200 w-64 mb-4 block"></div>
                      <div class="h-4 bg-gray-200 w-32 mb-4 block"></div>
                      <div class="h-4 bg-gray-200 w-40 mb-4 block"></div>
                      <div class="h-4 bg-gray-200 w-20 mb-4 block"></div>
                    </div>
                  </div>
                  <div class="w-1/3 px-4">
                    <div class="rounded-lg shadow-lg p-6">
                      <div class="block w-12 h-2 rounded-full bg-gray-200 mb-6"></div>

                      <svg
                        height="150"
                        width="150"
                        viewBox="0 0 20 20"
                        class="mx-auto mb-12"
                      >
                        <circle r="10" cx="10" cy="10" fill="#4299e1" />
                        <circle
                          r="5"
                          cx="10"
                          cy="10"
                          fill="transparent"
                          stroke="#2b6cb0"
                          stroke-width="10"
                          stroke-dasharray="11 31.4"
                          transform="rotate(-90) translate(-20)"
                        />
                      </svg>

                      <div class="flex flex-wrap -mx-2 mb-10">
                        <div class="w-1/3 px-2">
                          <div class="block h-2 rounded-full bg-gray-200"></div>
                        </div>
                        <div class="w-1/3 px-2">
                          <div class="block h-2 rounded-full bg-gray-200"></div>
                        </div>
                        <div class="w-1/3 px-2">
                          <div class="block h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-between my-10"></div>

                    <div class="text-right flex justify-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
