import { Link, useNavigate } from "react-router-dom";
import { dateFormatter } from "../utils/dateFormatter";
import DataTable from "../UI/DataTable";

import style from "./FormList.module.css";
export default function FormList({ forms, onRefresh = null }) {
  const navigate = useNavigate();
  function navigateToFormDashboard({ index }) {
    const form = forms[index];
    navigate(form.id);
  }

  function makeSubmissionHandler({ index }) {
    const form = forms[index];
    navigate(`${form.id}/newsubmission`);
  }

  function submissionsHandler({ index }) {
    const form = forms[index];
    navigate(`${form.id}/submissions`);
  }

  async function deleteFormHandler({ index }) {
    const form = forms[index];
    const proceed = window.confirm(
      `Are you sure you want to delete this ${form.name} form?`
    );

    if (proceed) {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/forms/${form.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Response(
          { message: "Failed to delete form" },
          { status: 500 }
        );
      }
      onRefresh();
    }
  }

  const menuOptions = [
    {
      label: "Make Submission",
      action: makeSubmissionHandler,
    },
    {
      label: "Submissions",
      action: submissionsHandler,
    },
    {
      label: "Dashboard",
      action: navigateToFormDashboard,
    },
    {
      label: "Delete",
      action: deleteFormHandler,
    },
  ];
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
      actions={menuOptions}
    />
  );
}
