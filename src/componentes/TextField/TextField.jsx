import "./TextField.style.css";

const TextField = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
