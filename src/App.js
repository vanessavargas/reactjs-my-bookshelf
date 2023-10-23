import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Categoria from "./componentes/Categoria";

function App() {
  const categorias = [
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
  ];

  const inicial = [
    {
      titulo: "Poder Sem Limites",
      autor: "Tony Robbins",
      imagem:
        "https://m.media-amazon.com/images/I/41g4LbKBBGL._SY445_SX342_.jpg",
      categoria: categorias[0].nome,
    },
    {
      titulo: "Atenção Plena: Mindfulness",
      autor: "D. Penman, M. Williams",
      imagem:
        "https://m.media-amazon.com/images/I/41MT2uBJsRL._SY445_SX342_.jpg",
      categoria: categorias[0].nome,
    },
    {
      titulo: "Mais Esperto que o Diabo",
      autor: "Napoleon Hill",
      imagem:
        "https://m.media-amazon.com/images/I/512TscpFEVL._SY445_SX342_.jpg",
      categoria: categorias[0].nome,
    },
    {
      titulo: "O Poder do Hábito",
      autor: "Charles Duhigg",
      imagem:
        "https://m.media-amazon.com/images/I/51Pw06uU8FL._SY445_SX342_.jpg",
      categoria: categorias[0].nome,
    },
    {
      titulo: "Clean Code",
      autor: "Robert C. Martin",
      imagem:
        "https://m.media-amazon.com/images/I/41SH-SvWPxL._SY445_SX342_.jpg",
      categoria: categorias[1].nome,
    },
    {
      titulo: "Padrões de Projetos",
      autor: "Erich Gamma e outros",
      imagem:
        "https://m.media-amazon.com/images/I/51bO3rI8hEL._SY445_SX342_.jpg",
      categoria: categorias[1].nome,
    },
    {
      titulo: "Refatoração",
      autor: "Martin Fowler",
      imagem:
        "https://m.media-amazon.com/images/I/51evX6wfYNL._SY445_SX342_.jpg",
      categoria: categorias[1].nome,
    },
    {
      titulo: "O Programador Pragmático",
      autor: "A. Hunt, D. Thomas",
      imagem:
        "https://m.media-amazon.com/images/I/41WH7HFsbzL._SY445_SX342_.jpg",
      categoria: categorias[1].nome,
    },
    {
      titulo: "Não Me Faça Pensar",
      autor: "Steve Krug",
      imagem:
        "https://m.media-amazon.com/images/I/51i8-f+QMFL._SY385_.jpg",
      categoria: categorias[2].nome,
    },
    {
      titulo: "A Psicologia das Cores",
      autor: "Eva Heller",
      imagem:
        "https://m.media-amazon.com/images/I/41RuWuRzqsL._SY445_SX342_.jpg",
      categoria: categorias[2].nome,
    },
    {
      titulo: "O Teste da Mãe",
      autor: "Rob Fitzpatrick",
      imagem:
        "https://m.media-amazon.com/images/I/6163jHQ-adL._SY385_.jpg",
      categoria: categorias[2].nome,
    },
    {
      titulo: "Roube Como um Artista",
      autor: "Austin Kleon",
      imagem:
        "https://m.media-amazon.com/images/I/81FOzurNqvL._SY385_.jpg",
      categoria: categorias[2].nome,
    },
    {
      titulo: "AGATHA CHRISTIE",
      autor: "Mistério no Caribe",
      imagem:
        "https://m.media-amazon.com/images/I/41p61Bvg4hL._SY445_SX342_.jpg",
      categoria: categorias[3].nome,
    },
    {
      titulo: "AGATHA CHRISTIE",
      autor: "Morte na Rua Hickory",
      imagem: "https://m.media-amazon.com/images/I/81JIIC-o+fL._SL1500_.jpg",
      categoria: categorias[3].nome,
    },
    {
      titulo: "SIDNEY SHELDON",
      autor: "A Outra Face",
      imagem:
        "https://m.media-amazon.com/images/I/41cPRsiFQOL._SY445_SX342_.jpg",
      categoria: categorias[3].nome,
    },
    {
      titulo: "KEN FOLLETT",
      autor: "As espiãs do Dia D",
      imagem:
        "https://m.media-amazon.com/images/I/51aWnDbhsTL._SY445_SX342_.jpg",
      categoria: categorias[3].nome,
    },
  ];

  const [livros, setLivros] = useState(inicial);

  function deletarLivro() {
    console.log("deletando livro");
  }

  return (
    <div>
      <Banner />
      <Formulario
        categorias={categorias.map((categoria) => categoria.nome)}
        aoCadastrar={livro =>
          setLivros([...livros, livro])
        }
      />
      <section className="categorias">
        <h1>Minha estante</h1>
        {categorias.map((categoria, indice) => (
          <Categoria
            key={indice}
            categoria={categoria}
            livros={livros.filter(
              livro => livro.categoria === categoria.nome
            )}
            aoDeletar={deletarLivro}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
