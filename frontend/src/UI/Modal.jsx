import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import style from "./Modal.module.css";
export default function Modal({ open, onClose, children }) {
  const modalref = useRef();

  useEffect(() => {
    const modal = modalref.current;
    if (open) {
      modal.showModal();
      console.log("show");
    }
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={modalref} className={style.modal} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
