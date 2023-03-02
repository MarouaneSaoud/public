import React, { useState, useEffect } from "react";
import BookService from "../Services/Book.services";
import CategorieService from "../Services/Categorie.services";
import { useNavigate, useParams } from "react-router-dom";

export default function BookForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categories, Setcategories] = useState([]);
  async function getCategories() {
    try {
      let result = await CategorieService.getAll();
      Setcategories(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [category, setcategory] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [isbn, setisbn] = useState();
  const [auteur, setauteur] = useState();
  const [editeur, setediteur] = useState();
  const [date_publication, setdatepublication] = useState();
  const [price, setprice] = useState(0);

  const handleSubmit = async (e) => {
    e.target.reset();
    e.preventDefault();
    const book = {
      name: name,
      description: description,
      isbn: isbn,
      auteur: auteur,
      editeur: editeur,
      date_publication: date_publication,
      price: price,
      category: category,
    };
    try {
      let result = await BookService.updateBook(id, book);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  const [book, setbook] = useState({});
  const [cat, setcat] = useState({});
  const [date_pub , setdate_pub] = useState();
  
  async function getbook() {
    try {
      let result = await BookService.getById(id);
      setbook(result.data);
      setcat(result.data.category);
      const today = new Date(result.data.date_publication);
      const numberOfDaysToAdd = 3;
      const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
      const defaultValue = new Date(date).toISOString().split('T')[0] 
      setdate_pub(defaultValue)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategories();
    getbook();
    
  }, []);
  return (
    <div>
      <div class="min-h-screen mx-24 p-6 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div className="mt-14">
            <div class="bg-white rounded  shadow-lg p-4 px-4 md:p-8 mb-6">
              <form onSubmit={handleSubmit}>
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">Update Book</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label for="name"> Name</label>
                        <input
                          value={book.name}
                          onChange={(e) => setname(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div class="md:col-span-5">
                        <label for="description">description</label>
                        <input
                          value={book.description}
                          onChange={(e) => setdescription(e.target.value)}
                          type="text"
                          name="description"
                          id="description"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div class="md:col-span-3">
                        <label for="isbn">isbn</label>
                        <input
                          value={book.isbn}
                          onChange={(e) => setisbn(e.target.value)}
                          type="text"
                          name="isbn"
                          id="isbn"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="auteur">auteur</label>
                        <input
                        value={book.auteur}
                          onChange={(e) => setauteur(e.target.value)}
                          type="text"
                          name="auteur"
                          id="auteur"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="editeur">editeur</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                          value={book.editeur}
                            onChange={(e) => setediteur(e.target.value)}
                            name="editeur"
                            id="editeur"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="date_publication">
                          date de publication
                        </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            
                            defaultValue={date_pub}
                            onChange={(e) => setdatepublication(e.target.value)}
                            name="date_publication"
                            type="date"
                            id="date_publication"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>

                      <div class="md:col-span-1">
                        <label for="zipcode">price</label>
                        <input
                        value={book.price}
                          onChange={(e) => setprice(e.target.value)}
                          type="number"
                          name="price"
                          id="price"
                          class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="category">category</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select
                            onChange={(e) => setcategory(e.target.value)}
                            id="category"
                            class="bg-gray-50 border text-gray-800 w-full bg-transparent border-gray-300  text-sm rounded-lg  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          >
                            
                            <option selected value={cat._id}>{cat.name}</option>
                            {categories.map((val, key) => (
                              <option value={val._id}>{val.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                          <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Update
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
