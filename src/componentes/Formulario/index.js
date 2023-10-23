import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ aoCadastrar, categorias }) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", titulo, autor, imagem, categoria);
    aoCadastrar({
      titulo,
      autor,
      imagem,
      categoria,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Titulo"
          placeholder="Digite seu titulo "
          valor={titulo}
          aoAlterado={(valor) => setTitulo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Autor"
          placeholder="Digite seu autor "
          valor={autor}
          aoAlterado={(valor) => setAutor(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Categorias"
          items={categorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
