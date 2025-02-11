import { useParams } from "react-router-dom";
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

  return { form: form };
}

export default function FormDetailPage() {
  const { formId } = useParams();
  return (
    <>
      <div>Dashboard</div>
      <div>submissions</div>
    </>
  );
  return <FormDetail form={form} />;
}
