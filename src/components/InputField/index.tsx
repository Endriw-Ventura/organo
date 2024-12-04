import "./InputField.css";

interface InputFieldProps{
  customEvent: (value: string) => void,
  placeholder: string,
  label: string,
  value: string,
  type?: string
}

function InputField({ type = "text", label, value, placeholder, customEvent } : InputFieldProps) {
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

export default InputField;
