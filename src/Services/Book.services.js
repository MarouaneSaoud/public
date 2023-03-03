import http from "./http.common";

async function getAll() {
  return await http.get("/book");
}
async function getById(id) {
  return await http.get("/book/" + id);
}
async function deleteBook(id) {
  return await http.delete("/book/" + id);
}
async function deleteimage(image) {
  return await http.delete("/book/deleteimage/" + image);
}
async function AddBook(book) {
  return await http.post("/book/", book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
async function updateBook(id, book) {
  return await http.put("/book/" + id, book);
}
async function countBook() {
  return await http.get("/book/count");
}
const BookService = {
  getAll,
  getById,
  deleteBook,
  AddBook,
  updateBook,
  deleteimage,
  countBook,
};

export default BookService;
