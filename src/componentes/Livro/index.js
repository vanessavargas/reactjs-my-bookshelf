import "./livro.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Livro = ({ livro, corDeFundo, aoDeletar }) => {
  return (
    <div className="livro">
      <AiFillCloseCircle size={25} className="livro__deletar" onClick={aoDeletar} />
      <div className="livro__cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={livro.imagem} alt={livro.titulo} />
      </div>
      <div className="livro__rodape">
        <h4>{livro.titulo}</h4>
        <h5>{livro.autor}</h5>
      </div>
    </div>
  );
};

export default Livro;
