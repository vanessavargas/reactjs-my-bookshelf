import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import "./Form.style.css";

const Form = ( props ) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const addBook = (evento) => {
    evento.preventDefault();
    props.addBook({
      title,
      author,
      image,
      category,
    })
    setTitle('')
    setAuthor('')
    setImage('')
    setCategory('')
  };

  return (
    <section className="form">
      <form onSubmit={addBook}>
        <h2>Preencha os dados do livro:</h2>
        <TextField
          obrigatorio={true}
          label="Title"
          placeholder="Digite o título"
          valor={title}
          aoAlterado={(valor) => setTitle(valor)}
        />
        <TextField
          obrigatorio={true}
          label="Autor"
          placeholder="Digite o autor"
          valor={author}
          aoAlterado={(valor) => setAuthor(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          aoAlterado={(valor) => setImage(valor)}
        />
        <DropdownList
          obrigatorio={true}
          label="Categorias"
          items={props.categories}
          valor={category}
          aoAlterado={(valor) => setCategory(valor)}
        />
        <Button texto="Salvar livro" />
      </form>
    </section>
  );
};

export default Form;
