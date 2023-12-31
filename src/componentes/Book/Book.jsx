import "./Book.style.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Book = ({ book, bgColor, deleteBook, clickFavorite }) => {
  function favorite() {
    clickFavorite(book.id);
  }

  return (
    <div className="book">
      <AiFillCloseCircle size={25} className="book__delete" onClick={() => deleteBook(book)}/>
      <div className="book__header" style={{ backgroundColor: bgColor }}>
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book__footer">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
        <div className="book__favorite">
          {book.favorite 
          ? <AiFillHeart size={25} onClick={favorite}/> 
          : <AiOutlineHeart size={25}  onClick={favorite}/>}
        </div>
      </div>
    </div> 
  );
};

export default Book;
