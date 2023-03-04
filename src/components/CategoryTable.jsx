import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import CategorieService from "../Services/Categorie.services";
import { Link } from "react-router-dom";

export default function CategoryTable() {
  const [Categorie, setCategorie] = useState([]);
  const [searchTearm, setsearchTearm] = useState([]);
  async function deleteCategory(id) {
    try {
      let result = await CategorieService.deleteCategorie(id);
      getCategory();
    } catch (error) {
      console.log(error);
    }
  }
  async function getCategory() {
    try {
      let result = await CategorieService.getAll();
      setCategorie(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategory();
    document.title = "Category 💯";
  });

  return (
    <div className="mr-3">
      <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
        <div className="flex items-end py-2">
          
          <input
            onChange={(event) => {
              setsearchTearm(event.target.value);
            }}
            className="border-blue-400 bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
          <th scope="col" class="px-6 w-3 py-4 font-medium text-gray-900">
              #
            </th>
            <th scope="col" class="px-6 w-28 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Description
            </th>
            <th
              scope="col"
              class="px-6 text-right w-9 py-4 font-medium text-gray-900"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          {Categorie.filter((val) => {
            if (searchTearm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTearm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => (
            <tr class="hover:bg-gray-50 text-base">
                 <td class="px-6 py-4">{key+1}</td>
              <td class="px-6 py-4">{val.name}</td>
              <td class="px-6 py-4">{val.description}</td>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  
                  <button
                    onClick={(e) => {
                      deleteCategory(val._id);
                    }}
                  >
                    <FaTrash className="text-red-700 hover:text-red-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
