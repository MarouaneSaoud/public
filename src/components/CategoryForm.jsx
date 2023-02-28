import React , {useState , useEffect} from "react";
import "../Style/FormStyle.css";
import CategorieService from '../Services/Categorie.services'

export default function CategoryForm({ visible, close }) {
  const [name , setName] = useState();
  const [description , Setdescription] = useState();
  async function submitHandler (e){
    e.target.reset();
    e.preventDefault();
    try{
      const cat = {name: name , description : description}
      const result = await CategorieService.addCategorie(cat);
      console.log(result.data)
      if(result.data.msg="created"){
        close();
      }
    }catch(error ){
      console.log(error)
    }
  }
  const handleClose = (e) => {
    if (e.target.id === "container") close();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="block w-96 bg-white shadow-lg p-8 rounded-xl">
        <form onSubmit={submitHandler}>
          <h3 class="text-base mb-4">Category</h3>

          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              onChange={(e)=>{setName(e.target.value) ; console.log(e.target.value)}}
              placeholder=" "
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-gray-200 font-sans"
            />
            <label class="absolute duration-200 top-3 -z-1 origin-0 text-gray-500 text-base">
              Category name
            </label>
          </div>

          <div class="relative z-0 w-full  mb-5">
            <textarea
            onChange={(e)=>{Setdescription(e.target.value) ;}}
              type="text"
              placeholder=" "
              class="pt-3 pb-2 block w-full h-12 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-gray-200 font-sans"
            />
            <label class="absolute duration-200 top-3 -z-1 origin-0 text-gray-500 text-base">
              description
            </label>
          </div>

          <button type="submit" class="rounded-xl bg-indigo-600 mt-8 block text-center text-white px-4 py-2 text-sm">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
