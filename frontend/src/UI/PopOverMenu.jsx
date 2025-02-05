import { useState, useRef, useEffect } from "react";
import { IconDotsVertical } from "@tabler/icons-react";

import style from "./PopOverMenu.module.css";

export default function PopOverMenu({ menu, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function clickOutsideHandler(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, [popoverRef]);

  return (
    <div className={style["popover-container"]}>
      <button
        className={style["popover-button"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children || <IconDotsVertical />}
      </button>
      {isOpen && (
        <div ref={popoverRef} className={style["popover-menu"]}>
          {menu && menu}
        </div>
      )}
    </div>
  );
}
