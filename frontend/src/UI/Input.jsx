import style from "./Input.module.css";
export default function Input({ id, label, type, ...props }) {
  let input = null;

  switch (type) {
    case "textarea":
      input = <textarea name={id} id={id} {...props} />;
      break;
    case "select":
      input = (
        <select name={id} id={id} {...props}>
          {
            <option value="" disabled>
              {props.placeholder || "Select an option"}
            </option>
          }
          {props.options &&
            props.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      );
      break;
    default:
      input = <input type={type} name={id} id={id} {...props} />;
      break;
  }
  return (
    <p className={style.inputGroup}>
      <label htmlFor={id}>{label}</label>
      {input}
    </p>
  );
}
