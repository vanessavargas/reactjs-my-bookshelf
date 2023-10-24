import { v4 as uuidv4 } from 'uuid';

export const categoriesData = [
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
  ];

  export const initialBooksData = [
    {
      id: 1,
      favorite: false,
      title: "Poder Sem Limites",
      author: "Tony Robbins",
      image:
        "https://m.media-amazon.com/images/I/41g4LbKBBGL._SY445_SX342_.jpg",
      category: categoriesData[0].name,
    },
    {
      id: 2,
      favorite: false,
      title: "Atenção Plena: Mindfulness",
      author: "D. Penman, M. Williams",
      image:
        "https://m.media-amazon.com/images/I/41MT2uBJsRL._SY445_SX342_.jpg",
      category: categoriesData[0].name,
    },
    {
      id: 3,
      favorite: false,
      title: "Mais Esperto que o Diabo",
      author: "Napoleon Hill",
      image:
        "https://m.media-amazon.com/images/I/512TscpFEVL._SY445_SX342_.jpg",
      category: categoriesData[0].name,
    },
    {
      id: 4,
      favorite: false,
      title: "O Poder do Hábito",
      author: "Charles Duhigg",
      image:
        "https://m.media-amazon.com/images/I/51Pw06uU8FL._SY445_SX342_.jpg",
      category: categoriesData[0].name,
    },
    {
      id: 5,
      favorite: false,
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/41SH-SvWPxL._SY445_SX342_.jpg",
      category: categoriesData[1].name,
    },
    {
      id: 6,
      favorite: false,
      title: "Padrões de Projetos",
      author: "Erich Gamma e outros",
      image:
        "https://m.media-amazon.com/images/I/51bO3rI8hEL._SY445_SX342_.jpg",
      category: categoriesData[1].name,
    },
    {
      id: 7,
      favorite: false,
      title: "Refatoração",
      author: "Martin Fowler",
      image:
        "https://m.media-amazon.com/images/I/51evX6wfYNL._SY445_SX342_.jpg",
      category: categoriesData[1].name,
    },
    {
      id: 8,
      favorite: false,
      title: "O Programador Pragmático",
      author: "A. Hunt, D. Thomas",
      image:
        "https://m.media-amazon.com/images/I/41WH7HFsbzL._SY445_SX342_.jpg",
      category: categoriesData[1].name,
    },
    {
      id: 9,
      favorite: false,
      title: "Não Me Faça Pensar",
      author: "Steve Krug",
      image: "https://m.media-amazon.com/images/I/51i8-f+QMFL._SY385_.jpg",
      category: categoriesData[2].name,
    },
    {
      id: 10,
      favorite: false,
      title: "A Psicologia das Cores",
      author: "Eva Heller",
      image:
        "https://m.media-amazon.com/images/I/41RuWuRzqsL._SY445_SX342_.jpg",
      category: categoriesData[2].name,
    },
    {
      id: 11,
      favorite: false,
      title: "O Teste da Mãe",
      author: "Rob Fitzpatrick",
      image: "https://m.media-amazon.com/images/I/6163jHQ-adL._SY385_.jpg",
      category: categoriesData[2].name,
    },
    {
      id: 12,
      favorite: false,
      title: "Roube Como um Artista",
      author: "Austin Kleon",
      image: "https://m.media-amazon.com/images/I/81FOzurNqvL._SY385_.jpg",
      category: categoriesData[2].name,
    },
    {
      id: 13,
      favorite: false,
      title: "AGATHA CHRISTIE",
      author: "Mistério no Caribe",
      image:
        "https://m.media-amazon.com/images/I/41p61Bvg4hL._SY445_SX342_.jpg",
      category: categoriesData[3].name,
    },
    {
      id: 14,
      favorite: false,
      title: "AGATHA CHRISTIE",
      author: "Morte na Rua Hickory",
      image: "https://m.media-amazon.com/images/I/81JIIC-o+fL._SL1500_.jpg",
      category: categoriesData[3].name,
    },
    {
      id: 15,
      favorite: false,
      title: "SIDNEY SHELDON",
      author: "A Outra Face",
      image:
        "https://m.media-amazon.com/images/I/41cPRsiFQOL._SY445_SX342_.jpg",
      category: categoriesData[3].name,
    },
    {
      id: 16,
      favorite: false,
      title: "KEN FOLLETT",
      author: "As espiãs do Dia D",
      image:
        "https://m.media-amazon.com/images/I/51aWnDbhsTL._SY445_SX342_.jpg",
      category: categoriesData[3].name,
    },
  ];