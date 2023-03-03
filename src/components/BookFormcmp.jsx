import React, { useState, useEffect } from "react";
import BookService from "../Services/Book.services";
import CategorieService from "../Services/Categorie.services";
import { useNavigate } from "react-router-dom";
export default function BookForm() {
  const navigate = useNavigate();

  const [categories, Setcategories] = useState([]);

  const [category, setcategory] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [isbn, setisbn] = useState();
  const [auteur, setauteur] = useState();
  const [editeur, setediteur] = useState();
  const [date_publication, setdatepublication] = useState();
  const [image, setimage] = useState(null);
  const [price, setprice] = useState(0);

  async function getCategories() {
    try {
      let result = await CategorieService.getAll();
      Setcategories(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.target.reset();
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("isbn", isbn);
    formdata.append("auteur", auteur);
    formdata.append("editeur", editeur);
    formdata.append("date_publication", date_publication);
    formdata.append("price", price);
    formdata.append("image", image);
    formdata.append("category", category);

    console.log(formdata.get("image"));
    try {
      let result = await BookService.AddBook(formdata);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getCategories();
    document.title = "Add Book 📖";
  }, []);
  return (
    <div>
      <div class="min-h-screen mx-24 p-6 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded  shadow-lg p-4 px-4 md:p-8 mb-6">
              <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">New Book</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label for="name"> Name</label>
                        <input
                          type="text"
                          required
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-5">
                        <label for="description">description</label>
                        <textarea
                          type="text"
                          required
                          name="description"
                          id="description"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => {
                            setdescription(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-3">
                        <label for="isbn">isbn</label>
                        <input
                          type="text"
                          required
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => {
                            setisbn(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="auteur">auteur</label>
                        <input
                          type="text"
                          required
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => {
                            setauteur(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="editeur">editeur</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            type="text"
                            name="editeur"
                            requiredclass="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            onChange={(e) => {
                              setediteur(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="date_publication">
                          date de publication
                        </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="date_publication"
                            required
                            type="date"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            onChange={(e) => {
                              setdatepublication(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div class="md:col-span-1">
                        <label for="zipcode">price</label>
                        <input
                          type="number"
                          required
                          name="price"
                          class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => {
                            setprice(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-3">
                        <label for="category">category</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            onChange={(e) => {
                              setcategory(e.target.value);
                            }}
                            required
                            class="bg-gray-50 border text-gray-800 w-full bg-transparent border-gray-300  text-sm rounded-lg  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          >
                            <option disabled selected>
                              Choose the category
                            </option>
                            {categories.map((val, key) => (
                              <option value={val._id}>{val.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-5">
                        <div className="mt-4">
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
                                Book Image
                              </span>
                              <input
                                className="hidden"
                                id="dropzone-file"
                                onChange={(e) => {
                                  setimage(e.target.files[0]);
                                }}
                                type="file"
                                required
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                          <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
