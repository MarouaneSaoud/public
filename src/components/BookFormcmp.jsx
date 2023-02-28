import React from 'react'

export default function BookForm() {
  return (
    <div>
      <div class="min-h-screen mx-24 p-6 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>


            <div class="bg-white rounded  shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">New Book</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="name"> Name</label>
                      <input  type="text" required name="name" id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="description">description</label>
                      <textarea type="text"required name="description" id="description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-3">
                      <label for="isbn">isbn</label>
                      <input type="text" required name="isbn" id="isbn" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="auteur">auteur</label>
                      <input type="text" required name="auteur" id="auteur" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="editeur">editeur</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="editeur" requiredclass="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />

                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="date_publication">date de publication</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="date_publication" required type="date" id="date_publication" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />

                      </div>
                    </div>

                    <div class="md:col-span-1">
                      <label for="zipcode">price</label>
                      <input type="number" required name="price" id="price" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>


                    <div class="md:col-span-3">
                      <label for="category">category</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        
                        <select required id="category" class="bg-gray-50 border text-gray-800 w-full bg-transparent border-gray-300  text-sm rounded-lg  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                          <option selected>Choose a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>

                    <div class="md:col-span-5">
                      <div className='mt-4'>

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
                            <input className="hidden" id="dropzone-file" type="file" required />

                          </label>
                        </div>

                      </div>
                    </div>
                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
