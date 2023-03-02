import http from "./http.common";

async function getAll() {
    return await http.get("/book");
}
async function getById(id) {
    return await http.get("/book"+id);
}
async function deleteBook(id){
    return await http.delete("/book"+id);
}
async function addBook(book){
    return await http.post("/book",book);
}
async function updateBook(id,book){
    return await http.put("/book/"+id,book);
}
const BookService ={ getAll,getById,deleteBook,addBook,updateBook}

export default BookService;