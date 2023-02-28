import React , {useState , useEffect} from 'react'
import { FaPen , FaTrash} from "react-icons/fa";
import CategorieService from '../Services/Categorie.services';
import {Link} from 'react-router-dom';

export default function CategoryTable() {
  const [Categorie, setCategorie] = useState([]);
  async function deleteCategory(id){
    try{
      let result = await CategorieService.deleteCategorie(id);
      getCategory();
      
    }
    catch(error){
      console.log(error);
    }
  }
    async function getCategory(){
    try{
      let result = await CategorieService.getAll();
      setCategorie(result.data);
      
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect (() =>{
        getCategory()
  },[]);

  return (
    <div className="mr-3">
    <table class=" w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead class="bg-gray-50">
      
        <tr>
          <th scope="col" class="px-6 w-28 py-4 font-medium text-gray-900">
            Name
          </th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Description
          </th>
          <th scope="col" class="px-6 text-right w-9 py-4 font-medium text-gray-900">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      {Categorie.map((val, key)=>
     
        <tr class="hover:bg-gray-50 text-base">
         
          <td class="px-6 py-4">
             {val.name}
          </td>
          <td class="px-6 py-4">{val.description}</td>
        
          <td class="px-6 py-4">
            <div class="flex justify-end gap-4">
              <Link  to="/">
                <FaPen className='text-green-700 hover:text-green-400'/>
              </Link>
              <button onClick={(e)=>{deleteCategory(val._id)}}>
              <FaTrash className='text-red-700 hover:text-red-400'/>
              </button>
            </div>
          </td>
        </tr>
        )}
        
      </tbody>
    </table>
  </div>
  )
}
