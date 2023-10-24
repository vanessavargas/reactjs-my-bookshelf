import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Category from "./componentes/Category";
import Footer from "./componentes/Footer/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [categories, setCategories] = useState([
    {
      id: uuidv4(),
      name: "Desenvolvimento Pessoal",
      color: "#BA8D90",
    },
    {
      id: uuidv4(),
      name: "Desenvolvimento de Software",
      color: "#AEC3AE",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#E4E4D0",
    },
    {
      id: uuidv4(),
      name: "Lógica na Ficção: Desafios Mentais",
      color: "#94A684",
    },
    {
      id: uuidv4(),
      name: "Outros",
      color: "#AEC3AE",
    },
  ]);

  const inicial = [
    {
      id: uuidv4,
      title: "Poder Sem Limites",
      author: "Tony Robbins",
      image:
        "https://m.media-amazon.com/images/I/41g4LbKBBGL._SY445_SX342_.jpg",
      category: categories[0].name,
    },
    {
      id: uuidv4,
      title: "Atenção Plena: Mindfulness",
      author: "D. Penman, M. Williams",
      image:
        "https://m.media-amazon.com/images/I/41MT2uBJsRL._SY445_SX342_.jpg",
      category: categories[0].name,
    },
    {
      id: uuidv4,
      title: "Mais Esperto que o Diabo",
      author: "Napoleon Hill",
      image:
        "https://m.media-amazon.com/images/I/512TscpFEVL._SY445_SX342_.jpg",
      category: categories[0].name,
    },
    {
      id: uuidv4,
      title: "O Poder do Hábito",
      author: "Charles Duhigg",
      image:
        "https://m.media-amazon.com/images/I/51Pw06uU8FL._SY445_SX342_.jpg",
      category: categories[0].name,
    },
    {
      id: uuidv4,
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/41SH-SvWPxL._SY445_SX342_.jpg",
      category: categories[1].name,
    },
    {
      id: uuidv4,
      title: "Padrões de Projetos",
      author: "Erich Gamma e outros",
      image:
        "https://m.media-amazon.com/images/I/51bO3rI8hEL._SY445_SX342_.jpg",
      category: categories[1].name,
    },
    {
      id: uuidv4,
      title: "Refatoração",
      author: "Martin Fowler",
      image:
        "https://m.media-amazon.com/images/I/51evX6wfYNL._SY445_SX342_.jpg",
      category: categories[1].name,
    },
    {
      id: uuidv4,
      title: "O Programador Pragmático",
      author: "A. Hunt, D. Thomas",
      image:
        "https://m.media-amazon.com/images/I/41WH7HFsbzL._SY445_SX342_.jpg",
      category: categories[1].name,
    },
    {
      id: uuidv4,
      title: "Não Me Faça Pensar",
      author: "Steve Krug",
      image: "https://m.media-amazon.com/images/I/51i8-f+QMFL._SY385_.jpg",
      category: categories[2].name,
    },
    {
      id: uuidv4,
      title: "A Psicologia das Cores",
      author: "Eva Heller",
      image:
        "https://m.media-amazon.com/images/I/41RuWuRzqsL._SY445_SX342_.jpg",
      category: categories[2].name,
    },
    {
      id: uuidv4,
      title: "O Teste da Mãe",
      author: "Rob Fitzpatrick",
      image: "https://m.media-amazon.com/images/I/6163jHQ-adL._SY385_.jpg",
      category: categories[2].name,
    },
    {
      id: uuidv4,
      title: "Roube Como um Artista",
      author: "Austin Kleon",
      image: "https://m.media-amazon.com/images/I/81FOzurNqvL._SY385_.jpg",
      category: categories[2].name,
    },
    {
      id: uuidv4,
      title: "AGATHA CHRISTIE",
      author: "Mistério no Caribe",
      image:
        "https://m.media-amazon.com/images/I/41p61Bvg4hL._SY445_SX342_.jpg",
      category: categories[3].name,
    },
    {
      id: uuidv4,
      title: "AGATHA CHRISTIE",
      author: "Morte na Rua Hickory",
      image: "https://m.media-amazon.com/images/I/81JIIC-o+fL._SL1500_.jpg",
      category: categories[3].name,
    },
    {
      id: uuidv4,
      title: "SIDNEY SHELDON",
      author: "A Outra Face",
      image:
        "https://m.media-amazon.com/images/I/41cPRsiFQOL._SY445_SX342_.jpg",
      category: categories[3].name,
    },
    {
      id: uuidv4,
      title: "KEN FOLLETT",
      author: "As espiãs do Dia D",
      image:
        "https://m.media-amazon.com/images/I/51aWnDbhsTL._SY445_SX342_.jpg",
      category: categories[3].name,
    },
  ];

  const [books, setBooks] = useState(inicial);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const deleteBook = (book) => {
    const newListBooks = books.filter((bookExists) => bookExists !== book);
    setBooks(newListBooks);
  };

  const bookAdded = (book) => {
    setBooks([...books, book]);
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

  return (
    <div>
      <Banner />
      <div className="modal">
        <h1>Minha estante</h1>
        <button className="button-form" onClick={handleButtonClick}>
          Cadastrar novo livro
        </button>
        {showModal && (
          <div className="modal__fixed">
            <div className="modal__relative">
              <div className="modal__rounded">
                <h3 className="text-center">Insira um novo livro</h3>
                <div className="space-y-6">
                  <Form
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
          </div>
        )}
      </div>

      {/* <Form
        categories={categories.map((category) => category.name)}
        addBook={(book) => bookAdded(book)}
      /> */}
      <section className="categories">
        {categories.map((category, indice) => (
          <Category
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
