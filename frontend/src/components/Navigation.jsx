import { NavLink, Form } from "react-router-dom";
import Button from "../UI/Button";
import style from "./Navigation.module.css";
import UserPanel from "./UserPanel";
export default function Navigation() {
  return (
    <aside>
      <div>
        <h2>Header</h2>
        <nav className={style.navigation}>
          <ul>
            <li>
              <NavLink to="/" className={style.linkNavigation}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/forms" className={style.linkNavigation}>
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <UserPanel />
    </aside>
  );
}
