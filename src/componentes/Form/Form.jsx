import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import "./Form.style.css";

const Form = ( props ) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrarLivro({
      titulo,
      autor,
      imagem,
      categoria,
    })
    setTitulo('')
    setAutor('')
    setImagem('')
    setCategoria('')
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do livro:</h2>
        <TextField
          obrigatorio={true}
          label="Titulo"
          placeholder="Digite o titulo"
          valor={titulo}
          aoAlterado={(valor) => setTitulo(valor)}
        />
        <TextField
          obrigatorio={true}
          label="Autor"
          placeholder="Digite o autor"
          valor={autor}
          aoAlterado={(valor) => setAutor(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          obrigatorio={true}
          label="Categorias"
          items={props.categories}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Button texto="Salvar livro" />
      </form>
    </section>
  );
};

export default Form;
