import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { dateFormatter } from "../utils/dateFormatter";

import Modal from "../UI/Modal";
import DataTable from "../UI/DataTable";
import UseHttp from "../hooks/useHttp";
import Button from "../UI/Button";

export async function loader() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/templates`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Response(
      { message: "Failed to load Templates" },
      { status: 500 }
    );
  }
  const data = await response.json();
  return { templates: data };
}

export default function TemplatesPage() {
  const [showModal, setShowModal] = useState(false);
  const { templates: initialTemplates } = useLoaderData();
  const {
    data: templates,
    isLoading,
    error,
    sendRequest: getTemplates,
  } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/templates`,
    initialData: initialTemplates,
  });

  function previewHandler({ index }) {
    setShowModal(true);
    console.log("Preview clicked " + showModal);
  }

  function edit() {
    console.log("Menu clicked");
  }

  async function deleteHandler({ index }) {
    const proceed = window.confirm(
      "Are you sure you want to delete this template?"
    );
    if (proceed) {
      const templateId = templates[index].id;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/templates/${templateId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Response(
          { message: "Failed to delete Template" },
          { status: 500 }
        );
      }
      getTemplates();
    }
    console.log("delete clicked " + index);
  }

  const menuOptions = [
    {
      label: "Preview",
      action: previewHandler,
    },
    {
      label: "Edit",
      action: ({ index }) => {
        console.log("Edit clicked " + index);
      },
    },
    {
      label: "Delete",
      action: deleteHandler,
    },
  ];

  return (
    <div>
      <Modal open={showModal}>
        <Button onClick={() => setShowModal(false)}>Close</Button>
        <h1>Modal</h1>
        <p>Modal Content</p>
      </Modal>
      <h1>Templates</h1>
      <DataTable
        values={templates.map((val) => ({
          ...val,
          createdAt: dateFormatter(val.createdAt),
          updatedAt: dateFormatter(val.updatedAt),
        }))}
        columns={{
          id: "ID",
          name: "Name",
          createdAt: "Created At",
          updatedAt: "Updated At",
        }}
        actions={menuOptions}
      />
    </div>
  );
}
