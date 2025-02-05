import { Link, useNavigate } from "react-router-dom";
import { dateFormatter } from "../utils/dateFormatter";
import DataTable from "../UI/DataTable";

import style from "./FormList.module.css";
export default function FormList({ forms }) {
  const navigate = useNavigate();
  function navigateToForm(id) {
    console.log(id);
    navigate(id);
  }
  return (
    <DataTable
      values={forms.map((val) => ({
        ...val,
        createdAt: dateFormatter(val.created_at),
        updatedAt: dateFormatter(val.updated_at),
      }))}
      columns={{
        id: "ID",
        name: "Name",
        createdAt: "Created At",
        updatedAt: "Updated At",
      }}
      onRowClick={({ index }) => navigateToForm(forms[index].id)}
    />
  );
}
