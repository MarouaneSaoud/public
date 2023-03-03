import React ,{useState , useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookService from '../Services/Book.services'

export default function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book , setbook]= useState({});
  const [category , setcategory] = useState({})
  async function getbook() {
    try {
      let result = await BookService.getById(id)
      setbook(result.data)
      console.log(result.data.category)
      setcategory(result.data.category)
      
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getbook();
    document.title = "Detail Book 📲";
    
  }, []);
  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={`http://localhost:4000/${book.image}`}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {book.name}
              </h1>
              <h2 class="text-lg title-font text-gray-500 tracking-widest">
                Author : {book.auteur}
              </h2>
              <h2 class="text-lg title-font text-gray-500 tracking-widest">
                Editor : {book.editeur}
              </h2>
              <h2 class="text-lg title-font text-gray-500 tracking-widest">
                Publication date : {book.date_publication}
              </h2>
              <h2 class="text-lg title-font text-gray-500 tracking-widest">
                Category : {category.name}
              </h2>

              <p class="leading-relaxed my-3">
                {book.description}
              </p>
              <div class="items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div class="flex items-center  justify-between p-4">
                <h2 class="text-gray-900 text-lg font-bold">Price :</h2>
                <h3 class="text-xl font-bold text-indigo-500 text-left">
                  {book.price} $
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
