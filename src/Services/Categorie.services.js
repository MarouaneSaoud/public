import http from "./http.common";

async function getAll() {
  return await http.get("/category");
}
async function getById(id) {
  return await http.get("/category/" + id);
}
async function updateCategorie(id, categorie) {
  return await http.put("/category/" + id, categorie);
}
async function addCategorie(categorie) {
  return await http.post("/category", categorie);
}
async function deleteCategorie(id) {
  return await http.delete("/category/" + id);
}
async function countcategorie() {
  return await http.get("/category/count");
}
const CategorieService = {
  getAll,
  getById,
  updateCategorie,
  addCategorie,
  deleteCategorie,
  countcategorie,
};
export default CategorieService;
