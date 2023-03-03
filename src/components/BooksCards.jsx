import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookService from "../Services/Book.services";

export default function () {
  const [books, setBooks] = useState([]);
  async function getBook() {
    try {
      let result = await BookService.getAll();
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function deletebook(id , image) {
    try {
      await BookService.deleteBook(id);
      try {
        await BookService.deleteimage(image);
        getBook()
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBook();
    document.title = "Book 📖";
  }, []);

  return (
    <div>
      <div class="container my-auto mx-auto sm:px-4 pt-10 pb-32">
        <div class="lg:h-full content-center grid grid-cols-3 gap-3">
          {books.map((val, key) => (
            <div class="md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4">
              <div class="bg-cover h-64">
                <img
                  class="h-full w-full"
                  src={`http://localhost:4000/${val.image}`}
                  alt="Strumble head lighthouse overlooking the sea"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-2xl mb-2 text-gray-700">
                  {val.name}
                </div>

                <p class="text-gray-700 md:h-40 pt-2 text-lg">
                  {val.description.substring(0, 220)} ...
                </p>
              </div>
              <div class="px-6 mt-2 py-2">
                <div class="w-full inline-block py-2 text-right border-t-2 border-blue-600 text-gray-700 font-semibold">
                  <Link
                    to={`/bookDetail/${val._id}`}
                    className="mx-1  hover:text-green-600 active:text-black"
                  >
                    Detail
                  </Link>
                  <Link
                    to={`/modifierbook/${val._id}`}
                    className="mx-1  hover:text-blue-700 active:text-black"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => {
                      deletebook(val._id,val.image);
                    }}
                    className="mx-1  hover:text-red-600 active:text-black"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
