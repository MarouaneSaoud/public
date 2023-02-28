import http from "./http.common";

async function getAll() {
    return await http.get("/categories");
}
async function getById(id){
    return await http.get("/categories/"+id);
}
async function updateCategorie(id,categorie){
    return await http.put("/categories/"+id,categorie);
}
async function addCategorie(categorie){
    return await http.post("/categories",categorie);
}
async function deleteCategorie(id){
    return await http.delete("/categories",categorie);
}


const CategorieService ={getAll,getById,updateCategorie,addCategorie,deleteCategorie}
export default CategorieService;