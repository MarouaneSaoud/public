import React, { useState, useEffect } from "react";
import BookService from "../Services/Book.services";
import CatgorieService from '../Services/Categorie.services'
import { FaCuttlefish, FaBookOpen } from "react-icons/fa";

export default function () {
  const [book, setbook] = useState();
  const [category , setcategory]=useState()
  async function getbookCount() {
    try {
      let result = await BookService.countBook();
      setbook(result.data.bookCount);
    } catch (error) {
      console.log(error);
    }
  }
  async function getcatCount() {
    try {
      let result = await CatgorieService.countcategorie()
      setcategory(result);
      console.log(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getbookCount();
    getcatCount();
    
  }, []);
  return (
    <>
      <main class="p-6 sm:p-10 space-y-6">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 class="text-gray-600 ml-0.5">
              Your Dashboard Space / Global information about your store
            </h2>
          </div>
        </div>
        <div class="grid  grid-cols-12 gap-6">
          <div class=""></div>
          <div class=""></div>

          <div class="flex items-center p-8 bg-white shadow rounded-lg col-span-4">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <FaCuttlefish className="h-9" />
            </div>
            <div>
              <span class="block text-2xl font-bold">6.8</span>
              <span class="block text-gray-500">Average mark</span>
            </div>
          </div>

          <div class="flex items-center p-8  bg-white shadow rounded-lg col-span-4" style={{width:417 }}>
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <FaBookOpen className="h-9" />
            </div>
            <div>
              <span class="block text-2xl font-bold">{book}</span>
              <span class="block text-gray-500">Total books  </span>
            </div>
          </div>
          <div class=""></div>
        </div>
      </main>
    </>
  );
}
