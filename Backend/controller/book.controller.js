import Book from "../modal/book.modal.js";
const frontend_URL = "https://bookstoreapp-frontend-4zgi.onrender.com/contact";

export const getBook=async(req,res)=>{

  try{
    const book=await Book.find()
    res.status(200).json(book)
  }
  catch(error){
    console.log("Error",error)
    res.status(500).json(error)

  }
}
