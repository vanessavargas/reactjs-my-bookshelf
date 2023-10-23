import Book from "../Book";
import "./Category.style.css";

const Category = ({ category, books, aoDeletar }) => {
  const css = { backgroundColor: category.corSecundaria };

  return books.length > 0 ? (
    <section className="category" style={css}>
      <h3 style={{ borderColor: category.corPrimaria }}>{category.nome}</h3>
      <div className="category__books">
        {books.map((book, indice) => (
          <Book
            key={indice}
            book={book}
            corDeFundo={category.corSecundaria}
            aoDeletar={aoDeletar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Category;
