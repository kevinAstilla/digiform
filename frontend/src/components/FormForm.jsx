import { Form, useNavigate, redirect } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import style from "./FormForm.module.css";
import { toISODate } from "../utils/dateFormatter.js";

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const formData = {
    name: data.get("name"),
    description: data.get("description"),
    status: data.get("status"),
    type: data.get("type"),
    createdBy: data.get("createdBy"),
    createdAt: new Date(data.get("createdAt")),
    updatedAt: data.get("createdAt"),
  };
  let apiUrl = `${import.meta.env.VITE_API_URL}/forms`;

  if (method === "PUT") {
    apiUrl += `/${params.formId}`;
  }
  const response = await fetch(apiUrl, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Response({ message: "Failed to save form" }, { status: 500 });
  }

  return redirect("..");
}

export default function FormForm({ method, form }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }
  return (
    <Form method={method}>
      <Input
        type="text"
        name="name"
        label="Form Name"
        defaultValue={form ? form.name : ""}
      />
      <Input
        type="textarea"
        name="description"
        label="Description"
        defaultValue={form ? form.description : ""}
      />
      <Input
        type="text"
        name="createdBy"
        label="Created By"
        defaultValue={form ? form.createdBy : ""}
      />
      <Input
        type="select"
        name="type"
        label="type"
        defaultValue={form ? form.status : ""}
        options={["Public", "Private"]}
      />
      <Input
        type="select"
        name="status"
        label="Status"
        defaultValue={form ? form.status : ""}
        options={["Draft", "Published", "Archived"]}
      />
      <Input
        type="date"
        name="createdAt"
        label="Created At"
        defaultValue={form ? toISODate(form.createdAt) : ""}
      />
      <p className={style.formAction}>
        <Button type="button" textOnly onClick={() => cancelHandler()}>
          Back
        </Button>
        <Button type="confirm">Submit</Button>
      </p>
    </Form>
  );
}
