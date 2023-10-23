import Livro from "../Livro";
import "./categoria.css";

const Categoria = ({ categoria, livros, aoDeletar }) => {
  return (
    livros.length > 0 && (
      <section
        className="categoria"
        style={{
          backgroundImage: "url(../../assets/images/fundo.png)",
          backgroundColor: categoria.corPrimaria,
        }}
      >
        <h3 style={{ borderColor: categoria.corSecundaria }}>
          {categoria.nome}
        </h3>
        <div className="categoria__livros">
          {livros.map((livro, indice) => (
            <Livro
              key={indice}
              livro={livro}
              corDeFundo={categoria.corSecundaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Categoria;
