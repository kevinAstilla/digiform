import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import {
  IconTemplate,
  IconForms,
  IconLogout2,
  IconUser,
  IconAdjustmentsAlt,
} from "@tabler/icons-react";

import UserPanel from "./UserPanel";
import Button from "../UI/Button";
import style from "./Navigation.module.css";

export default function Navigation() {
  const { email, firstname, lastname } = useRouteLoaderData("root");
  return (
    <aside>
      <div>
        <nav className={style.navigation}>
          <ul>
            <li>
              <NavLink to="/templates" className={style.linkNavigation}>
                <IconTemplate /> Template
              </NavLink>
            </li>
            <li>
              <NavLink to="/forms" className={style.linkNavigation}>
                <IconForms /> Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div className={style.linkNavigation}>
          <IconAdjustmentsAlt /> Settings
        </div>
        <Form action="/logout" method="POST" className={style.row}>
          <Button
            type="submit"
            style={{
              width: "100%",
              padding: ".5rem .5rem",
              justifyContent: "left",
            }}
            className={style.linkNavigation}
          >
            <IconLogout2 /> Logout
          </Button>
        </Form>
        <div className={style.linkNavigation}>
          <IconUser />
          <div className={style.userInfo}>
            <span>
              {firstname} {lastname}
            </span>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
