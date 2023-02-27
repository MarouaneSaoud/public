import React from 'react'
import { FaPen , FaTrash} from "react-icons/fa";
import {Link} from 'react-router-dom';

export default function CategoryTable() {
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
        <tr class="hover:bg-gray-50 text-base">
         
          <td class="px-6 py-4">
            Lorem
          </td>
          <td class="px-6 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos labore maxime suscipit accusamus cupiditate provident dolorem obcaecati, enim blanditiis similique? Aliquam sint cum ipsum quis odio odit blanditiis aspernatur.</td>
        
          <td class="px-6 py-4">
            <div class="flex justify-end gap-4">
              <Link  to="/">
                <FaPen className='text-green-700 hover:text-green-400'/>
              </Link>
              <Link  to="/">
              <FaTrash className='text-red-700 hover:text-red-400'/>
              </Link>
            </div>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
  )
}
