import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Rodape from "./componentes/Footer/Footer";
import Category from "./componentes/Category";
import Button from "./componentes/Button";

function App() {
  const categories = [
    {
      nome: "Desenvolvimento Pessoal",
      corPrimaria: "#C4D4B5",
      corSecundaria: "#94A684",
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
      corPrimaria: "#FFF5F9",
      corSecundaria: "#FFEEF4",
    },
    {
      nome: "Outros",
      corPrimaria: "#C4D4B5",
      corSecundaria: "#94A684",
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
      image:
        "https://m.media-amazon.com/images/I/51i8-f+QMFL._SY385_.jpg",
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
      image:
        "https://m.media-amazon.com/images/I/6163jHQ-adL._SY385_.jpg",
      category: categories[2].nome,
    },
    {
      title: "Roube Como um Artista",
      author: "Austin Kleon",
      image:
        "https://m.media-amazon.com/images/I/81FOzurNqvL._SY385_.jpg",
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteBook = (book) => {
    const newListBooks = books.filter((bookExists) => bookExists !== book);
  setBooks(newListBooks);
  }

  const aoNovoBookAdicionado = (book) => {
    setBooks([...books, book])
  }  

  return (
    <div>
      <Banner openModal={openModal} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <Form
        isOpen={isModalOpen}
        onClose={closeModal}
        categories={categories.map((category) => category.nome)}
        aoSalvar={book => aoNovoBookAdicionado(book)}/>
      <Button texto="Fechar Modal" onClick={closeModal} />
      </div>
        </div>
      )}
      
      <Form
        categories={categories.map((category) => category.nome)}
        aoSalvar={book => aoNovoBookAdicionado(book)}/>
      <section className="categories">
        <h1>Minha estante</h1>
        {categories.map((category, indice) => (
          <Category
            key={indice}
            category={category}
            corPrimaria={category.corPrimaria}
            corSecundaria={category.corSecundaria}
            books={books.filter(
              book => book.category === category.nome
            )}
            aoDeletar={deleteBook}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
