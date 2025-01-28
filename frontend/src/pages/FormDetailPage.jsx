import { useRouteLoaderData, redirect } from "react-router-dom";
import FormDetail from "../components/FormDetail";

export async function loader({ params }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/forms/${params.formId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Response({ message: "Failed to load form" }, { status: 500 });
  }
  const form = await response.json();

  return { form };
}

export async function action({ request, params }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  if (request.method === "DELETE") {
    const response = await fetch(`${apiUrl}/forms/${params.formId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Response({ message: "Failed to delete form" }, { status: 500 });
    }
    return redirect("/forms");
  }
  return null;
}

export default function FormDetailPage() {
  const { form } = useRouteLoaderData("formDetail");
  return <FormDetail form={form} />;
}
