import "./Book.style.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Book = ({ book, corDeFundo, aoDeletar }) => {
  return (
    <div className="book">
      <AiFillCloseCircle size={25} className="livro__deletar" onClick={aoDeletar} />
      <div className="book__cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book__rodape">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>
    </div> 
  );
};

export default Book;
