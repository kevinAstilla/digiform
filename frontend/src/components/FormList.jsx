import { Link, useNavigate } from "react-router-dom";
import { dateFormatter } from "../utils/dateFormatter";

import style from "./FormList.module.css";
export default function FormList({ forms }) {
  const navigate = useNavigate();
  function navigateToForm(id) {
    console.log(id);
    navigate(id);
  }
  return (
    <table className={style.dataTable}>
      <thead>
        <tr>
          <th>Form Name</th>
          <th>Create By</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {forms.map((form) => (
          <tr key={form.id} onClick={() => navigateToForm(form.id)}>
            <td>{form.name}</td>
            <td>{form.created_by}</td>
            <td>{dateFormatter(form.created_at)}</td>
            <td>{dateFormatter(form.updated_at)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
