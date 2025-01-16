import { useRouteLoaderData, redirect } from "react-router-dom";
import FormDetail from "../components/FormDetail";

import formData from "../data/form.js";

export function loader({ params }) {
  const form = formData.find((form) => form.id === params.formId);
  return { form };
}

export function action({ request, params }) {
  if (request.method === "DELETE") {
    const formIndex = formData.findIndex((form) => form.id === params.formId);
    formData.splice(formIndex, 1);
  }
  return redirect("/forms");
}

export default function FormDetailPage() {
  const { form } = useRouteLoaderData("formDetail");
  return <FormDetail form={form} />;
}
