import { useRouteLoaderData, Form } from "react-router-dom";
import { IconLogout2, IconUser } from "@tabler/icons-react";
import style from "./UserPanel.module.css";

import Button from "../UI/Button";
export default function UserPanel() {
  const { email, firstname, lastname } = useRouteLoaderData("root");
  return (
    <div>
      <div className={style.row}>
        <IconUser className={style.icon} />
        <div className={style.userInfo}>
          <span>
            {firstname} {lastname}
          </span>
          <span>{email}</span>
        </div>
      </div>
      <div className={style.divider}></div>

      <Form action="/logout" method="POST" className={style.row}>
        <Button type="submit" className={style.actions}>
          <IconLogout2 className={style.icon} /> Logout
        </Button>
      </Form>
    </div>
  );
}
