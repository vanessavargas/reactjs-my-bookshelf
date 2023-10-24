import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Category from "./componentes/Category";
import Footer from "./componentes/Footer/Footer";
import { v4 as uuidv4 } from "uuid";
import { categoriesData, initialBooksData } from './data';

function App() {
  const [categories, setCategories] = useState(categoriesData);
  const [books, setBooks] = useState(initialBooksData);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const deleteBook = (book) => {
    const newListBooks = books.filter((bookExists) => bookExists !== book);
    setBooks(newListBooks);
  };

  const bookAdded = (book) => {
    setBooks([...books, book]);
    setShowModal(false);
  };

  function changeColorCategory(color, id) {
    setCategories(
      categories.map((category) => {
        if (category.id === id) {
          category.color = color;
        }
        return category;
      })
    );
  }

  function addFavorite(id) {
    setBooks(books.map(book => {
      if(book.id === id) book.favorite = !book.favorite;
      return book;
    }))
  }

  function registerCategory({ name, color }) {
    setCategories([...categories, { name, color, id: uuidv4() }]);
  }  

  return (
    <div>
      <Banner />
      <div className="modal">
        <h1>Minha estante</h1>
        <button className="button-form" onClick={handleOpenModal}>
          Cadastrar novo livro
        </button>
      </div>
      {showModal && (
        <div className="modal-popup">
          <div className="modal-content">
            <div className="space-modal">
              <Form
                addCategory={registerCategory}
                categories={categories.map((category) => category.name)}
                addBook={(book) => bookAdded(book)}
              />
              <button
                className="button-form"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="categories">
        {categories.map((category, indice) => (
          <Category
          clickFavorite={addFavorite}
            changeColor={changeColorCategory}
            key={indice}
            category={category}
            corPrimaria={category.corPrimaria}
            color={category.color}
            books={books.filter((book) => book.category === category.name)}
            deleteBook={deleteBook}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
