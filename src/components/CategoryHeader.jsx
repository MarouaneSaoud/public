import React , {useState} from 'react'
import CategoryForm from '../components/CategoryForm';

export default function CategoryHeader() {
  const [showModel , setShowModel] = useState(false)
  const handleClose = ()=> {setShowModel(false)}
  return (
    <>
    <main class="p-6 sm:p-10 space-y-6">
      <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div class="mr-6">
          <h1 class="text-4xl font-semibold mb-2">Category</h1>
          <h2 class="text-gray-600 ml-0.5">Category space </h2>
        </div>
        
        <div class="flex flex-wrap items-start justify-end -mb-3">
        
          <button onClick={()=>{setShowModel(true)}}class="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Create new Category
          </button>
        </div>
      </div>
      
    </main>
    <CategoryForm close={handleClose} visible={showModel} />
  </>
  )
}
