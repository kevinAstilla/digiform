import style from "./Button.module.css";

export default function Button({
  children,
  textOnly,
  rounded,
  outlined,
  className = "",
  ...props
}) {
  let classes = style.button;

  classes = rounded ? `${classes} ${style.rounded}` : classes;

  classes = outlined ? `${classes} ${style.outlined}` : classes;

  classes = textOnly ? style.textButton : classes;
  classes += ` ${style.buttonBase} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
