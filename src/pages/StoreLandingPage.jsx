import React from "react";
import { Link } from "react-router-dom";
import BookStoreCard from '../components/BookStoreCard'
import CategoryStoreCard from '../components/CategoryStoreCard'

export default function StoreLandingPage() {
  return (
    <>
      <div class="bg-gray-100 font-sans leading-normal tracking-normal">
        <nav class="fixed flex items-center justify-between flex-wrap bg-white px-6 py-4 w-full z-10 top-0">
          <div class="flex items-start md:items-center flex-shrink-0 text-white mr-6 flex-col sm:flex-row">
            <div class="text-gray-800 no-underline font-bold" >
              <span class="text-md sm:pl-2 flex items-center">
                Book Land
              </span>
            </div>
            <a href="#category" class="text-gray-600 no-underline">
              <span class="text-md sm:pl-8 flex items-center">
               Book category
              </span>
            </a>

            <a href="#book"class="text-gray-600 no-underline">
              <span class="text-md sm:px-8 flex items-center"> Book </span>
            </a>
           
          </div>

          <div class="block md:hidden">
            <button
              id="nav-toggle"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 "
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

         
        </nav>

        <div class="mt-12 hero-bg flex items-center justify-center text-center">
          <div class="bg-purple-600 bg-opacity-50 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
            <h1 class="font-bold text-xl mb-2 md:mb-4 md:text-3xl">
              Welcome to our book store!
            </h1>
            <p>
              We offer a wide selection of books, from classic novels to modern
              non-fiction titles. Whether you’re looking for a new read or the
              perfect gift for a bookworm, you’ll find something to suit your
              needs and interests in our store. Our helpful staff is available
              to answer any questions you may have and help you find the perfect
              book
            </p>
            <button
              type="button"
              class="bg-gray-800 text-white uppercase py-2 px-7 mt-5 rounded-full inline-block sm:mt-8 text-sm tracking-wider"
            >
              See available books
            </button>
          </div>
        </div>

        <div class="mx-5 my-16 md:my-24 sm:grid grid-cols-2 gap-5 justify-items-center md:max-w-3xl md:mx-auto md:mt-24 md:mb-24">
          <div class="text-center bg-white shadow-lg md:max-w-sm">
            <div class="px-7 py-9">
              <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">
                Ready for spring collection
              </h2>
              <p>
                Treat yourself to some of our brand new spring collection - all
                with wonderful colours surrounding you.
              </p>
              <button
                type="button"
                class="bg-transparent border-gray-700 border-2 text-gray-800 font-bold uppercase py-2 px-7 mt-7 rounded-full inline-block sm:mt-8 text-xs tracking-wider hover:bg-gray-700 hover:text-white"
              >
                purchase now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1514861997808-4789788dded2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Spring collection"
              class="h-56 object-cover w-full md:h-64"
            />
          </div>

          <div class="text-center bg-white shadow-lg md:max-w-sm">
            <div class="px-7 py-9">
              <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">
                Ready for spring collection
              </h2>
              <p>
                Treat yourself to some of our brand new spring collection - all
                with wonderful colours surrounding you.
              </p>
              <button
                type="button"
                class="bg-transparent border-gray-700 border-2 text-gray-800 font-bold uppercase py-2 px-7 mt-7 rounded-full inline-block sm:mt-8 text-xs tracking-wider hover:bg-gray-700 hover:text-white"
              >
                purchase now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              alt="Spring collection"
              class="h-56 object-cover w-full md:h-64"
            />
          </div>
        </div>
        <CategoryStoreCard/>
        <BookStoreCard/>
      </div>
    </>
  );
}
