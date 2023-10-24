import "./TextField.style.css";

const TextField = ({
  type = 'text',
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className={`text-field text=${type}`}>
      <label>{label}</label>
      <input
      type={type}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
