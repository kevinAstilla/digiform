import { useState } from "react";
import { IconChevronsRight, IconChevronsLeft } from "@tabler/icons-react";
import Button from "./Button";
import style from "./CollapsableSidebar.module.css";

export default function CollapsableSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function CollapsableSidebarBtnHandler() {
    setIsOpen((curr) => !curr);
  }
  return (
    <aside
      className={`${style.sidebar} ${isOpen ? style.open : ""}`}
      aria-hidden={isOpen}
      role="complementary"
    >
      <Button
        className={style.sideToggleBtn}
        onClick={CollapsableSidebarBtnHandler}
        textOnly
      >
        {isOpen ? <IconChevronsLeft /> : <IconChevronsRight />}
      </Button>
      {children}
    </aside>
  );
}
