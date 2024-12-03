import "./InputField.css";

interface TextFieldProps{
  customEvent: (value: string) => void,
  placeholder: string,
  label: string,
  value: string,
  type: string
}

function TextField({ type = "text", label, value, placeholder, customEvent } : TextFieldProps) {
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
