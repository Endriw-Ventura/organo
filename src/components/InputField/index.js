import "./InputField.css";

function TextField({ type = "text", label, value, placeholder, customEvent }) {
  return (
    <div className={`inputField-${type}`}>
      <label> {label} </label>
      <input
        type={type}
        value={value}
        onChange={(event) => customEvent(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
