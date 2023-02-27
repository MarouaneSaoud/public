import http from "./http.common";

async function getAll() {
    return await http.get("/books");
}
async function getById(id) {
    return await http.get("/books/"+id);
}
async function deleteBook(id){
    return await http.delete("/books/"+id);
}
async function addBook(book){
    return await http.post("/books/",book);
}
async function updateBook(id,book){
    return await http.put("/books/"+id,book);
}
const BookService ={ getAll,getById,deleteBook,addBook,updateBook}

export default BookService;