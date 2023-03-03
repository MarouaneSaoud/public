import React, { useState, useEffect } from "react";
import CategorieService from "../Services/Categorie.services";

export default function CategoryStoreCard() {
  const [Categorie, setCategorie] = useState([]);
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
  });
  return (
    <div id="category">
      <div class="px-20 pb-52">
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Categories </h1>
     
      </div>
      {Categorie.map((val, key) => (
        <div class="bg-white p-6 m-7 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            {val.name}
          </h2>
          <p class="text-gray-700">{val.description}</p>
        </div>
        ))}
        
      </div>
      
    </div>
  );
}
