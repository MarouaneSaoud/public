import React, { useState, useEffect } from "react";
import BookService from "../Services/Book.services";

export default function BookStoreCard() {
  const [books, setBooks] = useState([]);
  async function getBook() {
    try {
      let result = await BookService.getAll();
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBook();
    document.title = "Book Land 🏠";
  }, []);
  return (
    <div id="book">
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Books </h1>
      </div>

      <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {books.map((val, key) => (
          <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={`http://localhost:4000/${val.image}`}
                alt="Product"
                class="h-80 w-72 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs"> {val.auteur}</span>
                <p class="text-lg font-bold text-black truncate block capitalize">
                  {val.name}
                </p>
                <div class="flex items-center">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">
                    ${val.price}
                  </p>

                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
