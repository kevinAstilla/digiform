import style from "./PageContent.module.css";

export default function PageLayout({ children }) {
  return <div className={style.container}>{children}</div>;
}
