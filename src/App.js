import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Rodape from "./componentes/Footer/Footer";
import Category from "./componentes/Category";

function App() {
  const categories = [
    {
      nome: "Desenvolvimento Pessoal",
      corPrimaria: "#FFF5F9",
      corSecundaria: "#BA8D90",
    },
    {
      nome: "Desenvolvimento de Software",
      corPrimaria: "#D9E8D9",
      corSecundaria: "#AEC3AE",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#EBEBE6",
      corSecundaria: "#E4E4D0",
    },
    {
      nome: "Lógica na Ficção: Desafios Mentais",
      corPrimaria: "#C4D4B5",
      corSecundaria: "#94A684",
    },
    {
      nome: "Outros",
      corPrimaria: "#D9E8D9",
      corSecundaria: "#AEC3AE",
    },
  ];

  const inicial = [
    {
      title: "Poder Sem Limites",
      author: "Tony Robbins",
      image:
        "https://m.media-amazon.com/images/I/41g4LbKBBGL._SY445_SX342_.jpg",
      category: categories[0].nome,
    },
    {
      title: "Atenção Plena: Mindfulness",
      author: "D. Penman, M. Williams",
      image:
        "https://m.media-amazon.com/images/I/41MT2uBJsRL._SY445_SX342_.jpg",
      category: categories[0].nome,
    },
    {
      title: "Mais Esperto que o Diabo",
      author: "Napoleon Hill",
      image:
        "https://m.media-amazon.com/images/I/512TscpFEVL._SY445_SX342_.jpg",
      category: categories[0].nome,
    },
    {
      title: "O Poder do Hábito",
      author: "Charles Duhigg",
      image:
        "https://m.media-amazon.com/images/I/51Pw06uU8FL._SY445_SX342_.jpg",
      category: categories[0].nome,
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/41SH-SvWPxL._SY445_SX342_.jpg",
      category: categories[1].nome,
    },
    {
      title: "Padrões de Projetos",
      author: "Erich Gamma e outros",
      image:
        "https://m.media-amazon.com/images/I/51bO3rI8hEL._SY445_SX342_.jpg",
      category: categories[1].nome,
    },
    {
      title: "Refatoração",
      author: "Martin Fowler",
      image:
        "https://m.media-amazon.com/images/I/51evX6wfYNL._SY445_SX342_.jpg",
      category: categories[1].nome,
    },
    {
      title: "O Programador Pragmático",
      author: "A. Hunt, D. Thomas",
      image:
        "https://m.media-amazon.com/images/I/41WH7HFsbzL._SY445_SX342_.jpg",
      category: categories[1].nome,
    },
    {
      title: "Não Me Faça Pensar",
      author: "Steve Krug",
      image: "https://m.media-amazon.com/images/I/51i8-f+QMFL._SY385_.jpg",
      category: categories[2].nome,
    },
    {
      title: "A Psicologia das Cores",
      author: "Eva Heller",
      image:
        "https://m.media-amazon.com/images/I/41RuWuRzqsL._SY445_SX342_.jpg",
      category: categories[2].nome,
    },
    {
      title: "O Teste da Mãe",
      author: "Rob Fitzpatrick",
      image: "https://m.media-amazon.com/images/I/6163jHQ-adL._SY385_.jpg",
      category: categories[2].nome,
    },
    {
      title: "Roube Como um Artista",
      author: "Austin Kleon",
      image: "https://m.media-amazon.com/images/I/81FOzurNqvL._SY385_.jpg",
      category: categories[2].nome,
    },
    {
      title: "AGATHA CHRISTIE",
      author: "Mistério no Caribe",
      image:
        "https://m.media-amazon.com/images/I/41p61Bvg4hL._SY445_SX342_.jpg",
      category: categories[3].nome,
    },
    {
      title: "AGATHA CHRISTIE",
      author: "Morte na Rua Hickory",
      image: "https://m.media-amazon.com/images/I/81JIIC-o+fL._SL1500_.jpg",
      category: categories[3].nome,
    },
    {
      title: "SIDNEY SHELDON",
      author: "A Outra Face",
      image:
        "https://m.media-amazon.com/images/I/41cPRsiFQOL._SY445_SX342_.jpg",
      category: categories[3].nome,
    },
    {
      title: "KEN FOLLETT",
      author: "As espiãs do Dia D",
      image:
        "https://m.media-amazon.com/images/I/51aWnDbhsTL._SY445_SX342_.jpg",
      category: categories[3].nome,
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

  const aoNovoBookAdicionado = (book) => {
    setBooks([...books, book]);
  };

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
                  <h3 className="text-center">
                    Insira um novo livro
                  </h3>
                  <div className="space-y-6">
                    <Form
                      categories={categories.map((category) => category.nome)}
                      aoSalvar={(book) => aoNovoBookAdicionado(book)}
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
        categories={categories.map((category) => category.nome)}
        aoSalvar={(book) => aoNovoBookAdicionado(book)}
      /> */}
      <section className="categories">
        {categories.map((category, indice) => (
          <Category
            key={indice}
            category={category}
            corPrimaria={category.corPrimaria}
            corSecundaria={category.corSecundaria}
            books={books.filter((book) => book.category === category.nome)}
            aoDeletar={deleteBook}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
