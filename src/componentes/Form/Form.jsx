import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import "./Form.style.css";

const Form = ({ addBook, categories, addCategory }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [colorCategory, setColorCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addBook({
      title,
      author,
      image,
      category,
    });
    setTitle("");
    setAuthor("");
    setImage("");
    setCategory("");
  };

  const handleOnSubmitCategory = (event) => {
    event.preventDefault();
    addCategory({
      name: nameCategory,
      color: colorCategory,
    });
    setShowModal(false);
    setNameCategory("");
    setColorCategory("");
  };

  return (
    <section className="form">
      <form onSubmit={handleOnSubmit}>
        <h2>Preencha os dados do livro:</h2>
        <TextField
          required={true}
          label="Título"
          placeholder="Digite o título"
          valor={title}
          aoAlterado={(valor) => setTitle(valor)}
        />
        <TextField
          required={true}
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
        <div className="form__category">
          <DropdownList
            required={true}
            label="Categorias"
            items={categories}
            valor={category}
            aoAlterado={(valor) => setCategory(valor)}
          />
          <button className="button-form" onClick={handleOpenModal}>
        Cadastrar categoria
      </button>
        </div>
        <div className="btn-form">
            <Button texto="Salvar livro" />
          </div>
      </form>
      

      {showModal && (
        <div className="modal-popup">
          <div className="modal-content">
            <div className="space-modal">
              <form onSubmit={handleOnSubmitCategory}>
                <h2>Preencha as informações da categoria:</h2>
                <TextField
                  required={true}
                  label="Nome"
                  placeholder="Digite o nome da categoria"
                  valor={nameCategory}
                  aoAlterado={(valor) => setNameCategory(valor)}
                />
                <TextField
                  required={true}
                  label="Cor"
                  type="color"
                  placeholder="Insira a cor"
                  valor={colorCategory}
                  aoAlterado={(valor) => setColorCategory(valor)}
                />
                <div className="btn-form">
                  <Button texto="Criar categoria" />
                </div>
              </form>
              <button
                className="button-form"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Form;
