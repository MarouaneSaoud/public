import React, { useState, useEffect } from "react";
import BookService from "../Services/Book.services";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function TableInformation() {
  const [books, setBooks] = useState([]);
  const [searchTearm, setsearchTearm] = useState([]);
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
  }, []);
  return (
    <div className="mr-3">
      <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
        <div className="flex items-center py-2">
          <input
            onChange={(event) => {
              setsearchTearm(event.target.value);
            }}
            className="border-purple-500 bg-gray-200 appearance-none border-2rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-searcg"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <table class=" w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              #
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              isbn
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              auteur
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              editeur
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              price
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Category
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Detail
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          {books
            .filter((val) => {
              if (searchTearm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTearm.toLowerCase()) ||
                val.auteur.toLowerCase().includes(searchTearm.toLowerCase()) ||
                val.isbn.toLowerCase().includes(searchTearm.toLowerCase()) ||
                val.editeur.toLowerCase().includes(searchTearm.toLowerCase()) ||
                val.price.toLowerCase().includes(searchTearm.toLowerCase()) ||
                val.category.name.toLowerCase().includes(searchTearm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => (
              <tr>
                <td class="px-6 py-4">{key + 1}</td>
                <td class="px-6 py-4">{val.name}</td>
                <td class="px-6 py-4">{val.isbn}</td>
                <td class="px-6 py-4">{val.auteur}</td>
                <td class="px-6 py-4">{val.editeur}</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {val.price} $<span class=" bg-green-600"></span>
                  </span>
                </td>
                <td class="px-6 py-4">{val.category.name}</td>

                <td class="px-6 py-4">
                  <div class="flex ml-4  gap-4">
                    <Link to={"/bookDetail/" + val._id}>
                      <FaEye className="w-6 hover:text-orange-500 active:text-orange-300" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
