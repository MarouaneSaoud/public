import React from "react";
import { Link } from "react-router-dom";


export default function StoreLandingPage() {
    return (

        <>

            <div class="bg-gray-100 font-sans leading-normal tracking-normal">

                <nav class="flex items-center justify-between flex-wrap bg-white px-6 py-8 w-full z-10 top-0">
                    <div class="flex items-start md:items-center flex-shrink-0 text-white mr-6 flex-col sm:flex-row">
                        <a class="text-gray-800 no-underline font-bold" href="#">
                            <span class="text-md sm:pl-2 flex items-center"> Products <svg class="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </span>
                        </a>
                        <Link
                            to="/Book"
                            class="text-gray-600 no-underline"
                        >
                            <span class="text-md sm:pl-8 flex items-center"> Collections </span>
                        </Link>

                        <Link
                            to="/Category"
                            class="text-gray-600 no-underline"
                        >
                            <span class="text-md sm:px-8 flex items-center"> Gifts </span>
                        </Link>
                        <Link
                            to="/Store"
                            class="text-gray-600 no-underline"
                        >
                            <span class="text-md flex items-center pb-2 md:pb-0"> Our magazine </span>
                        </Link>


                    </div>

                    <div class="block md:hidden">
                        <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 ">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>

                    <div class="w-full flex-grow border-t-2 border-gray-200 md:border-t-0  md:items-center md:w-auto hidden md:block pt-2 md:pt-0" id="nav-content">
                        <ul class="list-reset md:flex justify-end flex-1 items-center">
                            <li class="mr-3">
                                <a class="inline-block text-gray-600 no-underline" href="#"><svg class="w-6 h-6 md:mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></a>
                            </li>

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
                        </ul>
                    </div>
                </nav>

                <div class="hero-bg flex items-center justify-center text-center">
                    <div class="bg-purple-600 bg-opacity-50 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
                        <h1 class="font-bold text-xl mb-2 md:mb-4 md:text-3xl">The gift of happiness</h1>
                        <p>Show your gratitude with one of our gift sets, large and small, specially designed to spread joy to someone you love.</p>
                        <button type="button" class="bg-gray-800 text-white uppercase py-2 px-7 mt-5 rounded-full inline-block sm:mt-8 text-sm tracking-wider">shop now</button>
                    </div>

                </div>


                <div class="mx-5 my-16 md:my-24 sm:grid grid-cols-2 gap-5 justify-items-center md:max-w-3xl md:mx-auto md:mt-24 md:mb-24">
                    <div class="text-center bg-white shadow-lg md:max-w-sm">
                        <div class="px-7 py-9">
                            <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">Ready for spring collection</h2>
                            <p>Treat yourself to some of our brand new spring collection - all with wonderful colours surrounding you.</p>
                            <button type="button" class="bg-transparent border-gray-700 border-2 text-gray-800 font-bold uppercase py-2 px-7 mt-7 rounded-full inline-block sm:mt-8 text-xs tracking-wider hover:bg-gray-700 hover:text-white">purchase now</button>
                        </div>

                        <img src="https://images.unsplash.com/photo-1514861997808-4789788dded2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Spring collection" class="h-56 object-cover w-full md:h-64" />
                    </div>

                    <div class="text-center bg-white shadow-lg md:max-w-sm">
                        <div class="px-7 py-9">
                            <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">Ready for spring collection</h2>
                            <p>Treat yourself to some of our brand new spring collection - all with wonderful colours surrounding you.</p>
                            <button type="button" class="bg-transparent border-gray-700 border-2 text-gray-800 font-bold uppercase py-2 px-7 mt-7 rounded-full inline-block sm:mt-8 text-xs tracking-wider hover:bg-gray-700 hover:text-white">purchase now</button>
                        </div>

                        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Spring collection" class="h-56 object-cover w-full md:h-64" />
                    </div>
                </div>
            </div>
        </>
    );
}
