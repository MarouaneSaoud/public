import React from 'react'

export default function BookForm() {
  return (
    <div>
      <div class="min-h-screen p-6flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div className='mt-14'>


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
                      <input type="text" name="name"  id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="description">description</label>
                      <input type="text" name="description" id="description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-3">
                      <label for="isbn">isbn</label>
                      <input type="text" name="isbn" id="isbn" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="auteur">auteur</label>
                      <input type="text" name="auteur" id="auteur" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="editeur">editeur</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="editeur" id="editeur" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />

                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="date_publication">date de publication</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="date_publication" type="date" id="date_publication" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />

                      </div>
                    </div>

                    <div class="md:col-span-1">
                      <label for="zipcode">price</label>
                      <input type="number" name="price" id="price" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>


                    <div class="md:col-span-2">
                      <label for="category">category</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        
                        <select id="category" class="bg-gray-50 border text-gray-800 w-full bg-transparent border-gray-300  text-sm rounded-lg  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                          <option selected>Choose a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modifier</button>
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
