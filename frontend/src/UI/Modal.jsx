import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import style from "./Modal.module.css";
import Button from "./Button";
export default function Modal({ open, onClose, children }) {
  const modalref = useRef();

  useEffect(() => {
    const modal = modalref.current;
    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={modalref} className={style.modal}>
      <div className={style.cta}>
        <Button onClick={onClose} className={style.closeButton} textOnly={true}>
          <IconX size={16} />
        </Button>
      </div>

      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
