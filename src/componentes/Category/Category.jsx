import Book from "../Book";
import "./Category.style.css";
import hexToRgba from "hex-to-rgba";

const Category = ({ category, books, deleteBook, changeColor, clickFavorite }) => {
  const css = { backgroundImage: 'url(../../../assets/image/fundo.png)', backgroundColor: hexToRgba(category.color, '0.6')};

  return books.length > 0 ? (
    <section className="category" style={css}>
      <input onChange={event => changeColor(event.target.value, category.id)} value={category.color} type="color" className="input__color"/>
      <h3 style={{ borderColor: category.color }}>{category.name}</h3>
      <div className="category__books">
        {books.map((book, indice) => (
          <Book
            key={indice}
            book={book}
            bgColor={category.color}
            deleteBook={deleteBook}
            clickFavorite={clickFavorite}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Category;
