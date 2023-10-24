import "./TextField.style.css";

const TextField = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  required = false,
}) => {
  return (
    <div className={`text-field text-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
